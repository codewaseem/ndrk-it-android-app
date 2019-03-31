import React, { createContext } from "react";

export const TitleContext = createContext({
    title: "N.D.R.K",
    changeTitle: () => { }
});

export function withChangeTitle(OriginalComponent) {
    return function WrapperComponent(props) {
        return (<TitleContext.Consumer>
            {({ changeTitle }) => {
                return <OriginalComponent changeTitle={changeTitle} {...props} />
            }}
        </TitleContext.Consumer>
        );
    }

}