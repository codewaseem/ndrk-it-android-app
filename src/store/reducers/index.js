import { SET_REDIRECT_PATH, START_NETWORK_REQUEST, NETWORK_REQUEST_SUCCESS, NETWORK_REQUEST_FAILURE, SET_USER, UNSET_USER, SET_MESSAGES, ADD_MESSAGE } from "../actions";
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

function chatReducer(chat = {
    cs: {
        1: [],
        2: [],
        3: [],
        4: []
    },
    ec: {
        1: [],
        2: [],
        3: [],
        4: []
    },
    cv: {
        1: [],
        2: [],
        3: [],
        4: []
    },
    me: {
        1: [],
        2: [],
        3: [],
        4: []
    }
}, action) {
    switch (action.type) {
        case SET_MESSAGES: {
            let { messages } = action;
            let newChat = {...chat};
            newChat[messages[0].branch][messages[0].academicYear] = messages;

            return {
                ...newChat
            };

        }
        case ADD_MESSAGE: {
            let { branch, academicYear } = action.message;
            let newChat = {...chat};
            newChat[branch][academicYear] = [...chat[branch][academicYear], action.message];
            return newChat;
        };
        default: return chat;
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
    auth: authReducer,
    chat: chatReducer
});

export default rootReducer;