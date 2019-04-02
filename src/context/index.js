import React, { createContext } from "react";
import { checkLogin, login } from "../store/actions";
import { connect } from "react-redux";
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
            login : (email, password) => {
                dispatch(login({email, password}));
            }
        }
    }

    return connect(mapUserToProp, mapUserDispatchToProp)(OriginalComponent);
}