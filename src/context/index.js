import React, { createContext } from "react";
import { checkLogin, login, studentSignUp, facultySignUp, logoutUser, postMessage, getClassroomMessages } from "../store/actions";
import { connect } from "react-redux";
import { notify } from "reapop";
import { RoutesURL } from "../staticData";
import { Redirect } from "react-router";
// import { User_Types } from "../server";
import { getUserHomeUrl } from "../helpers";
import { User_Types } from "../server";

export const TitleContext = createContext({
    title: "N.D.R.K",
    changeTitle: () => { }
});

export function withChangedTitle(newTitle) {

    return function (OriginalComponent) {
        class TitleChanger extends React.Component {

            componentDidMount() {
                if (this.props.title !== newTitle)
                    this.props.changeTitle(newTitle);
            }

            render() {
                return <OriginalComponent {...this.props} />;
            }
        }

        return (props) => {
            return (<TitleContext.Consumer>
                {({ title, changeTitle }) => (<TitleChanger title={title} changeTitle={changeTitle} {...props} />)}
            </TitleContext.Consumer>
            )
        }
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
            }
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(OriginalComponent);
}