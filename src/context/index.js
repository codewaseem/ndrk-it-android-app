import React, { createContext } from "react";
import { checkLogin, login, studentSignUp, facultySignUp } from "../store/actions";
import { connect } from "react-redux";
import { notify } from "reapop";
import { RoutesURL } from "../staticData";
import { User } from "parse";
import { Redirect } from "react-router";
import { User_Types } from "../server";
import { getUserHomeUrl } from "../helpers";

export const TitleContext = createContext({
    title: "N.D.R.K",
    changeTitle: () => { }
});

export function withChangedTitle(newTitle) {

    return function (OriginalComponent) {
        class TitleChanger extends React.Component {
            componentDidMount() {
                this.props.changeTitle(newTitle);
            }

            render() {
                return <OriginalComponent {...this.props} />;
            }
        }

        return (props) => {
            return (<TitleContext.Consumer>
                {({ changeTitle }) => (<TitleChanger changeTitle={changeTitle} {...props} />)}
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
                dispatch(login({ email, password }));
            },
            studentSignUp: (userData) => {
                dispatch(studentSignUp(userData));
            },
            facultySignUp: (userData) => {
                dispatch(facultySignUp(userData));
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
    let user = User.current();
    if (user) {
        return (props) => (<OriginalComponent user={user} {...props} />);
    } else {
        return (props) => (<Redirect to={redirectTo} {...props} />);
    }
}

export function onlyNonUser(OriginalComponent) {
    let user = User.current();
    if(user) {
        return (props) => (<Redirect to={getUserHomeUrl(user)} {...props} />);
    } else {
        return (props) => (<OriginalComponent {...props} />);
    }
}