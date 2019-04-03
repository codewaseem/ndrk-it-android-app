import { SET_REDIRECT_PATH, START_NETWORK_REQUEST, NETWORK_REQUEST_SUCCESS, NETWORK_REQUEST_FAILURE, SET_USER, UNSET_USER } from "../actions";
import { combineReducers } from "redux";
import { reducer as notificationsReducer } from 'reapop';

let defaultUiState = {
    isFetching: false,
    fetchingMessage: "",
    redirectPath: ""
};

function uiReducer(uiState = defaultUiState, action) {
    switch (action.type) {
        case START_NETWORK_REQUEST: return {
            isFetching: true,
            fetchingMessage: action.message,
        };
        case NETWORK_REQUEST_SUCCESS: return {
            isFetching: false,
            fetchingMessage: ""
        };
        case NETWORK_REQUEST_FAILURE: return {
            isFetching: false,
            fetchingMessage: ""
        };
        case SET_REDIRECT_PATH: return {
            isFetching: false,
            fetchingMessage: "",
            redirectPath: action.path

        }
        default: return uiState;
    }
}

let defaultAuthState = {
    user: null
}

function authReducer(auth = defaultAuthState, action) {
    switch (action.type) {
        case SET_USER: return {
            user: action.user
        };
        case UNSET_USER: return {
            user: null
        }
        default: return auth;
    }
}

// default value for notifications
const defaultNotification = {
    status: 'info',
    position: 'bc',
    dismissible: true,
    dismissAfter: 5000,
    allowHTML: true,
    closeButton: true
};

const rootReducer = combineReducers({
    notifications: notificationsReducer(defaultNotification),
    ui: uiReducer,
    auth: authReducer
});

export default rootReducer;