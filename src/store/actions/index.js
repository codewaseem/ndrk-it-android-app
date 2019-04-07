import { UserManager, User_Types, EventManager, CircularManager } from "../../server";
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
    return signUp({ ...userData, type: User_Types.Student });
}


export function facultySignUp(userData) {
    return signUp({ ...userData, type: User_Types.Faculty });
}

export function setRedirectPath(path) {
    return {
        type: SET_REDIRECT_PATH,
        path
    }
}

function signUp(userData) {
    return async function (dispatch) {
        dispatch(startNetworkRequest("Creating new account..."));
        try {
            let user = await UserManager.signUp(userData);
            if (user) {
                dispatch(networkRequestSuccess());
                dispatch(notify(successNotifyConfig("Account Created!", "You can now login once the account is verified by the admin")));
                return user;
            } else {
                throw new Error("Failed to create a new account");
            }
        } catch (e) {
            dispatch(notify(failureNotifyConfig("Fail", e.message)));
            dispatch(networkRequestFailure());
            return undefined;
        }
    }
}


export function logoutUser() {
    return async function (dispatch) {
        dispatch(startNetworkRequest("Logging out...Bye!"));
        try {
            UserManager.logout();
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
            let user = await UserManager.login({ email, password });
            dispatch(setUser(user));
            dispatch(networkRequestSuccess());
            dispatch(notify(successNotifyConfig("Logged In", `Welcome, ${user.name}`)));
            return user;
        } catch (e) {
            dispatch(unsetUser());
            dispatch(networkRequestFailure());
            dispatch(notify(failureNotifyConfig("Error", e.message)));
        }
    }
}

export function checkLogin() {
    return async function (dispatch) {
        dispatch(startNetworkRequest("Please wait..."));
        try {
            let user = await UserManager.checkLogin();
            if (user) {
                dispatch(setUser(user));
                dispatch(networkRequestSuccess());
                dispatch(notify(successNotifyConfig("Logged In", `Welcome, ${user.name}!`)));
            }
        } catch (e) {
            dispatch(unsetUser());
            dispatch(networkRequestFailure());
        }
    }
}


function asyncQueryActionHelper(
    queryAsyncFunc = () => { },
    onResultMessage,
    onNoResultMessage,
    startNetworkRequestMessage = "Please wait...",
    onErrorThrown = "Something went wrong!"
) {
    return async function (dispatch) {
        dispatch(startNetworkRequest(startNetworkRequestMessage));
        try {
            let result = await queryAsyncFunc();
            dispatch(networkRequestSuccess());
            if (result) {
                onResultMessage && dispatch(notify(successNotifyConfig("Done", onResultMessage)));
                return result;
            } else {
                onNoResultMessage && dispatch(notify({ ...successNotifyConfig("Done", onNoResultMessage), status: "info" }));
            }
        } catch (e) {
            dispatch(networkRequestFailure());
            dispatch(notify(failureNotifyConfig("Error", onErrorThrown + "\n" + e.message)));
        }
    }
}

export const findUserByEmailAction = (email, successNotificationMessage, failureNotificationMessage) => {
    return asyncQueryActionHelper(
        UserManager.getUserByEmail.bind(null, email),
        successNotificationMessage,
        failureNotificationMessage,
        `Finding user by email ${email}`,
    );
}

export const getUnverifiedAccountsAction = (successNotificationMessage, failureNotificationMessage) => {
    return asyncQueryActionHelper(
        UserManager.getUnverifiedAccounts,
        successNotificationMessage,
        failureNotificationMessage,
        `Getting unverified accounts`,
    )
}

export const setVerified = (email, successNotificationMessage, failureNotificationMessage) => {
    return asyncQueryActionHelper(
        UserManager.setVerified.bind(null, email),
        successNotificationMessage,
        failureNotificationMessage,
        `Setting account as verified`
    )
}

export const updateUserInfo = (email, data, successNotificationMessage, failureNotificationMessage) => {
    return asyncQueryActionHelper(
        UserManager.updateUserInfo.bind(null, email, data),
        successNotificationMessage,
        failureNotificationMessage,
        "Updating user details..."
    )
}

export const getStudents = () => {
    return asyncQueryActionHelper(
        UserManager.getStudents,
        null,
        null,
        "Getting students....",
        "Failed to get students"
    );
}

export const getFaculty = () => {
    return asyncQueryActionHelper(
        UserManager.getFaculty,
        null,
        null,
        "Getting faculty members....",
        "Failed to get faculty members"
    );
}


export const addEvent = (data) => {
    return asyncQueryActionHelper(
        EventManager.add.bind(null, data),
        "Event Added",
        "Failed to add the event",
        "Adding event",
    );
}

export const getUpcomingEvents = () => {
    return asyncQueryActionHelper(
        EventManager.getUpcomingEvents,
        null,
        null,
        "Getting upcoming events...",
    )
}  

export const addCircular = (data) => {
    return asyncQueryActionHelper(
        CircularManager.add.bind(null, data),
        "Circular Added!",
        "Failed to add the circular",
        "Adding circular",
    );
}

export const getCirculars = () => {
    return asyncQueryActionHelper(
        CircularManager.getCirculars,
        null,
        null,
        "Getting circulars...",
    );
}