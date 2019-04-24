import { UserManager, User_Types, EventManager, CircularManager, StudyMaterialManager, Messenger } from "../../server";
import { notify, POSITIONS } from 'reapop';
// import { RoutesURL } from "../../staticData";

export const START_NETWORK_REQUEST = "START_NETWORK_REQUEST";
export const NETWORK_REQUEST_SUCCESS = "NETWORK_REQUEST_SUCCESS";
export const NETWORK_REQUEST_FAILURE = "NETWORK_REQUEST_FAILURE";
export const SET_REDIRECT_PATH = "SET_REDIRECT_PATH";

export const SET_USER = "SET_USER";
export const UNSET_USER = "UNSET_USER";

export const SET_MESSAGES = "SET_MESSAGES";
export const ADD_MESSAGE = "ADD_MESSAGE";

export const SET_APP_TITLE = "SET_APP_TITLE";

export const setAppTitle = (title) => {
    return {
        type: SET_APP_TITLE,
        title
    }
}

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

export function setMessages(messages) {
    return {
        type: SET_MESSAGES,
        messages
    }
}

export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        message
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

export const resetPassword = (email) => {
    return asyncQueryActionHelper(
        UserManager.resetPassword.bind(null, email),
        "Password reset link sent to your email!",
        "Couldn't send email!",
        "Trying to send password reset link..."
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

export const getUpcomingEvents = (branchType = "all") => {
    return asyncQueryActionHelper(
        branchType === "all" ? EventManager.getCommonEvents : EventManager.getBranchEvents,
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

export const getCirculars = (branchType = "all") => {
    return asyncQueryActionHelper(
        branchType === "all" ? CircularManager.getCommonCirculars : CircularManager.getBranchCirculars,
        null,
        null,
        "Getting circulars...",
    );
}

export const uploadStudyMaterial = (data) => {
    return asyncQueryActionHelper(
        StudyMaterialManager.uploadStudyMaterial.bind(null, data),
        "File added",
        "Failed to upload the file",
        "Uploading file...."
    )
}

export const getStudyMaterials = () => {
    return asyncQueryActionHelper(
        StudyMaterialManager.getStudyMaterials,
        null,
        "No files added yet",
        "Getting study materials for your branch"
    )
}

export const postMessage = ({ message, branch, academicYear }) => {
    return async function (dispatch) {
        try {
            let postedMessage = await Messenger.postMessage(message, branch, academicYear);
            if (!postedMessage) {
                dispatch(notify(failureNotifyConfig("Failed", "Failed to post the message")));
                return;
            } else {
                dispatch(addMessage(postedMessage));
                return postedMessage;
            }

        } catch (e) {
            dispatch(notify(failureNotifyConfig("Error", e.message)));
        }
    }
}

export const getClassroomMessages = ({ branch, academicYear }, silent = true) => {
    return async function (dispatch) {
        try {
            (!silent) && dispatch(notify(successNotifyConfig("Syncing messages...")));
            let messages = await Messenger.getClassroomMessages(branch, academicYear);
            if (messages && messages.length) {
                dispatch(setMessages(messages));
            } else if (messages.length === 0) {
                (!silent) && dispatch(notify({ ...successNotifyConfig("Done", "No messages yet!"), status: "info" }));
            }
        } catch (e) {
            console.log(e);
            (!silent) && dispatch(notify(failureNotifyConfig("Error", e.message)));
        }
    }
}

export const subscribeToClassroom = ({ branch, academicYear }, onMessageReceived) => {
    return async function (dispatch) {
        let subscription = await Messenger.subscribeToClassroom(branch, academicYear, (message) => {
            dispatch(addMessage(message));
            if (onMessageReceived && typeof onMessageReceived === "function") {
                onMessageReceived(message);
            }
        });

        return subscription;
    }
}

export const unsubscribeFromClassroom = () => {
    return async function () {
        return await Messenger.unsubscribeFromClassroom();
    }
}

export const deleteUser = (email) => {
    return asyncQueryActionHelper(
        UserManager.deleteUser.bind(null, email),
        "User deleted!",
        null,
        "Deleting user..."
    )
}