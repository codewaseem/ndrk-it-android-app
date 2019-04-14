import React from "react";
import Page from "../Page";
import { withChangedTitle } from "../../context";

const LocateUsPage = () => {
    return (
        <Page>
            <iframe
                title="Locate N.D.R.K"
                style={{height:"100%", width:"100%"}}
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBBrwoN7BSFC77ECuCKobQHpPBnxHwQvfI&maptype=satellite&zoom=18&q=KIADB,%20Thimmanahally%20Industrial%20Area,%20Kandali,%20NH%20-%2075,%20Hassan,%20Karnataka%20573255"
                 allowFullScreen> 
            </iframe>
        </Page>
    );
}

export default withChangedTitle("Locate Us")(LocateUsPage);