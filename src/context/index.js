import React, { createContext } from "react";
import { checkLogin, login, studentSignUp, facultySignUp, logoutUser } from "../store/actions";
import { connect } from "react-redux";
import { notify } from "reapop";
import { RoutesURL } from "../staticData";
import { Redirect } from "react-router";
// import { User_Types } from "../server";
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
        console.log("onlyUser", props);
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
        console.log("onlyUser", props);
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