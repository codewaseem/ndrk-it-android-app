import React, { createContext } from "react";

export const TitleContext = createContext({
    title: "N.D.R.K",
    changeTitle: () => { }
});

export function changeTitle(newTitle) {

    return function (OriginalComponent) {
        class TitleChanger extends React.Component {
            componentDidMount() {
                this.props.changeTitle(newTitle);
            }

            render() {
                return <OriginalComponent {...this.props} />;
            }
        }

        const WrappedComponent = (props) => {
            return (<TitleContext.Consumer>
                {({ changeTitle }) => (<TitleChanger changeTitle={changeTitle} {...props} />)}
            </TitleContext.Consumer>
            )
        }

        return WrappedComponent;
    }

}