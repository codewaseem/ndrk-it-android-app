import { newStudent, newFaculty } from "../../server";
import { User } from "parse";
import { notify, POSITIONS } from 'reapop';
// import { RoutesURL } from "../../staticData";

export const START_NETWORK_REQUEST = "START_NETWORK_REQUEST";
export const NETWORK_REQUEST_SUCCESS = "NETWORK_REQUEST_SUCCESS";
export const NETWORK_REQUEST_FAILURE = "NETWORK_REQUEST_FAILURE";
export const SET_REDIRECT_PATH = "SET_REDIRECT_PATH";

export const SET_USER = "SET_USER";
export const UNSET_USER = "UNSET_USER";

// Notification actions
const successNotifyConfig = (title, message) => {
    return {
        position: POSITIONS.bottomCenter,
        title,
        status: "success",
        dismissible: false,
        message,
    }
}

const failureNotifyConfig = (title, message) => {
    return {
        position: POSITIONS.bottomCenter,
        title,
        status: "error",
        message,
    }
}

export function startNetworkRequest(message) {
    return {
        type: START_NETWORK_REQUEST,
        message
    }
}

export function networkRequestSuccess() {
    return {
        type: NETWORK_REQUEST_SUCCESS
    }
}

export function networkRequestFailure() {
    return {
        type: NETWORK_REQUEST_FAILURE
    }
}


export function setUser(user) {
    return {
        type: SET_USER,
        user
    }
}

export function unsetUser() {
    return {
        type: UNSET_USER
    }
}


export function studentSignUp(userData) {
    return signUp(userData);
}


export function facultySignUp(userData) {
    return signUp(userData, newFaculty);
}

export function setRedirectPath(path) {
    return {
        type: SET_REDIRECT_PATH,
        path
    }
}

function signUp(userData, signUpFunction = newStudent) {
    return async function (dispatch) {
        dispatch(startNetworkRequest("Creating new account..."));
        try {
            let user = await signUpFunction(userData);
            if (user) {
                // dispatch(setUser(user));
                dispatch(networkRequestSuccess());
                dispatch(notify(successNotifyConfig("Account Created!", "You can now login once the account is verified by the admin")));
                // dispatch(setRedirectPath(RoutesURL.LOGIN));
                User.logOut();
                return user;
            } else {
                throw new Error("Failed to create a new account");
            }
        } catch (e) {
            dispatch(notify(failureNotifyConfig("Fail", "Failed to create the account!")));
            dispatch(networkRequestFailure());
            return undefined;
        }
    }
}


export function logoutUser() {
    return async function (dispatch) {
        dispatch(startNetworkRequest("Logging out...Bye!"));
        try {
            User.logOut();
            dispatch(unsetUser());
            dispatch(networkRequestSuccess());
        } catch (e) {
            dispatch(networkRequestFailure());
            dispatch(unsetUser());
        }
    }
}

export function login({ email, password }) {
    return async function (dispatch) {
        dispatch(startNetworkRequest("Logging in...."));
        try {
            let user = await User.logIn(email, password);
            if (user) {
                dispatch(networkRequestSuccess());
                if (user.attributes.verified && !user.attributes.graduated) {
                    dispatch(setUser(user));
                    dispatch(notify(successNotifyConfig("Success", "You are now logged in!")));
                    return user;
                } else if (user.attributes.graduated) {
                    dispatch(notify(failureNotifyConfig("Not Allowed", "Graduated students are not allowed to login")));
                } else {
                    dispatch(notify({ title: "Alert!", message: "Your account verification is pending!", status: "info" }));
                }
                User.logOut();
                return false;
            } else {
                throw new Error("Login failed");
            }
        } catch (e) {
            dispatch(unsetUser());
            dispatch(networkRequestFailure(e.message));
            return undefined;
        }
    }
}

export function checkLogin() {
    return function (dispatch) {
        dispatch(startNetworkRequest("Please wait..."));
        try {
            let user = User.current();
            if (user) {

                if (user.attributes.verified && !user.attributes.graduated) {
                    dispatch(setUser(user));
                } else if (!user.attributes.graduated) {
                    User.logOut();
                    dispatch(notify({ title: "Alert!", message: "Your account verification is pending!", status: "info" }));
                } else {
                    User.logOut();
                    dispatch(notify({ title: "Alert!", message: "You are not allowed to login!", status: "info" }));
                }
                dispatch(networkRequestSuccess());
                dispatch(notify({ ...successNotifyConfig("", `Welcome ${user.attributes.name}!`), status: "default" }));
            } else {
                dispatch(networkRequestFailure());
                // dispatch(notify(failureNotifyConfig("Failed", "")))
                dispatch(unsetUser());
            }

        } catch (e) {
            dispatch(unsetUser());
            dispatch(networkRequestFailure(e.message));
        }
    }
}




window.signUp = studentSignUp;
window.checkLogin = checkLogin;