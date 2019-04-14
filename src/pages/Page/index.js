import React from "react";
import "./style.css";

const Page = ({ style = {}, classes = [], children, ...props }) => {
    return (
        <section style={style} className={`base-page-style ${classes.join(" ")}`} {...props}>
            {
                children? children :
                <p>Noting to show here</p>
            }
        </section>
    );
}

export default Page;