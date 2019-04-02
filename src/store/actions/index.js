import { newStudent } from "../../server";
import { User } from "parse";
import { notify, POSITIONS } from 'reapop';

export const START_NETWORK_REQUEST = "START_NETWORK_REQUEST";
export const NETWORK_REQUEST_SUCCESS = "NETWORK_REQUEST_SUCCESS";
export const NETWORK_REQUEST_FAILURE = "NETWORK_REQUEST_FAILURE";

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

export function studentSignUp(newUserData) {
    return async function (dispatch) {
        dispatch(startNetworkRequest("Creating new account..."));
        try {
            let student = await newStudent(newUserData);
            if (student) {
                dispatch(setUser(student));
                dispatch(networkRequestSuccess());
                dispatch(notify(successNotifyConfig("Done", "Account Created!")));
            } else {
                throw new Error("Failed to create a new account");
            }
        } catch (e) {
            dispatch(notify(failureNotifyConfig("Fail", "Failed to create the account!")));
            dispatch(networkRequestFailure());
        }
    }
}

export function logoutUser() {
    return async function (dispatch) {
        dispatch(startNetworkRequest("Logging out...Bye!"));
        try {
            await User.logOut();
            dispatch(unsetUser());
        } catch (e) {
            dispatch(unsetUser());
            dispatch(networkRequestFailure(""));
        }
    }
}

export function login({ email, password }) {
    return async function (dispatch) {
        dispatch(startNetworkRequest("Logging in...."));
        try {
            let user = await User.logIn(email, password);
            if (user) {
                dispatch(setUser(user));
                dispatch(notify(successNotifyConfig("Success", "You are now logged in!")))
            } else {
                throw new Error("Login failed");
            }
        } catch (e) {
            dispatch(unsetUser());
            dispatch(networkRequestFailure(e.message));
        }
    }
}

export function checkLogin() {
    return function (dispatch) {
        dispatch(startNetworkRequest("Please wait..."));
        try {
            setTimeout(() => {
                let user = User.current();
                if (user) {
                    dispatch(networkRequestSuccess());
                    dispatch(notify({ ...successNotifyConfig("", `Welcome ${user.attributes.name}!`), status: "default" }));
                    dispatch(setUser(user));
                } else {
                    dispatch(networkRequestFailure());
                    // dispatch(notify(failureNotifyConfig("Failed", "")))
                    dispatch(unsetUser());
                }

            }, 1000);
        } catch (e) {
            dispatch(unsetUser());
            dispatch(networkRequestFailure(e.message));
        }
    }
}




window.signUp = studentSignUp;
window.checkLogin = checkLogin;