import React from "react";
import { checkLogin, login, studentSignUp, facultySignUp, logoutUser, postMessage, getClassroomMessages, setAppTitle, subscribeToClassroom, unsubscribeFromClassroom, resetPassword } from "../store/actions";
import { connect } from "react-redux";
import { notify } from "reapop";
import { RoutesURL } from "../staticData";
import { Redirect } from "react-router";
// import { User_Types } from "../server";
import { getUserHomeUrl } from "../helpers";
import { User_Types } from "../server";

export function withChangedTitle(newTitle) {

    return function (OriginalComponent) {
        class Comp extends React.Component {
            componentDidMount() {
                if (this.props.appTitle !== newTitle) {
                    this.props.setAppTitle(newTitle);
                }
            }
            
            render() {
                return <OriginalComponent {...this.props} />
            }
        }

        const mapStateToProps = (state) => {
            return {
                appTitle: state.ui.appTitle
            }
        }

        const mapDispatchToProps = (dispatch) => {
            return {
                setAppTitle: (newTitle) => {
                    dispatch(setAppTitle(newTitle));
                }
            }
        }

        return connect(mapStateToProps, mapDispatchToProps)(Comp);
    }

}

export function withUser(OriginalComponent) {
    const mapUserToProp = (state) => {
        return {
            user: state.auth.user
        }
    }

    const mapUserDispatchToProp = (dispatch) => {
        return {
            checkLogin: () => {
                dispatch(checkLogin());
            },
            login: (email, password) => {
                return dispatch(login({ email, password }));
            },
            studentSignUp: (userData) => {
                return dispatch(studentSignUp(userData));
            },
            facultySignUp: (userData) => {
                return dispatch(facultySignUp(userData));
            },
            logoutUser: () => {
                dispatch(logoutUser());
            },
            resetPassword: (email) => {
                return dispatch(resetPassword(email));
            }
        }
    }

    return connect(mapUserToProp, mapUserDispatchToProp)(OriginalComponent);
}

export function withNotify(OriginalComponent) {

    const mapNotifyDispatchToProp = (dispatch) => {
        return {
            notify: (title, message, status = "info") => {
                dispatch(notify({ title, message, status }));
            }
        }
    }

    return connect(null, mapNotifyDispatchToProp)(OriginalComponent);
}

export function onlyUser(OriginalComponent, redirectTo = RoutesURL.LOGIN) {
    const Comp = (props) => {
        if (props.user) {
            return <OriginalComponent {...props} />
        } else {
            return <Redirect to={redirectTo} />
        }
    }

    const mapStateToProps = (state) => {
        return {
            user: state.auth.user
        }
    }

    return connect(mapStateToProps)(Comp);

}

export function onlyNonUser(OriginalComponent) {
    const Comp = (props) => {
        if (!props.user) {
            return <OriginalComponent {...props} />
        } else {
            return <Redirect to={getUserHomeUrl(props.user)} />
        }
    }

    const mapStateToProps = (state) => {
        return {
            user: state.auth.user
        }
    }

    return connect(mapStateToProps)(Comp);

}

export function onlyAdmin(OriginalComponent) {
    const Comp = (props) => {
        if (props.user && props.user.type === User_Types.Admin) {
            return <OriginalComponent {...props} />
        } else {
            return <Redirect to={RoutesURL.HOME} />
        }
    }


    const mapStateToProps = (state) => {
        return {
            user: state.auth.user
        }
    }

    return connect(mapStateToProps)(Comp);
}

export function onlyFaculty(OriginalComponent) {
    const Comp = (props) => {
        if (props.user && props.user.type === User_Types.Faculty) {
            return <OriginalComponent {...props} />
        } else {
            return <Redirect to={RoutesURL.HOME} />
        }
    }


    const mapStateToProps = (state) => {
        return {
            user: state.auth.user
        }
    }

    return connect(mapStateToProps)(Comp);
}

export function onlyStudent(OriginalComponent) {
    const Comp = (props) => {
        if (props.user && props.user.type === User_Types.Student) {
            return <OriginalComponent {...props} />
        } else {
            return <Redirect to={RoutesURL.HOME} />
        }
    }


    const mapStateToProps = (state) => {
        return {
            user: state.auth.user
        }
    }

    return connect(mapStateToProps)(Comp);
}

export function withChat(OriginalComponent) {


    const mapStateToProps = (state) => {
        return {
            user: state.auth.user,
            chat: state.chat
        };
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            postMessage: (data) => {
                return dispatch(postMessage(data));
            },
            getClassroomMessages: (data, silent) => {
                return dispatch(getClassroomMessages(data, silent));
            },
            subscribeToNewMessages : (data, onMessage) => {
                return dispatch(subscribeToClassroom(data, onMessage));
            },
            unsubscribe : () => {
                return dispatch(unsubscribeFromClassroom());
            }
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(OriginalComponent);
}