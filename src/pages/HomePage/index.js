import React, { Component } from "react";
import HeroPage from "../HeroPage";

import { defaultImageSliderOptions, homePageSliderImagesData, homePageOptions, loginOrLogoutOptionsData, IfAdminOptions, IfFacultyOptions, IfStudentOptions } from "../../staticData";
import ImageSlider from "../../components/ImageSlider";
import TilesGrid from "../../components/TilesGrid";
import { withChangedTitle, withUser } from "../../context";
import { User_Types } from "../../server";

class HomePage extends Component {
    render() {
        const gridProps = { style: { height: "100%" } };
        const rowProps = { style: { height: "100%" }, "justify-content-between": true, "align-items-center": true };
        const colProps = { size: 4 };
        const { user } = this.props;

        let userOptions = [];
        if (user && user.type === User_Types.Admin) {
            userOptions = IfAdminOptions;
        } else if (user && user.type === User_Types.Faculty) {
            userOptions = IfFacultyOptions;
        } else if(user && user.type === User_Types.Student) {
            userOptions = IfStudentOptions;
        }
        const loginOrLogoutOptions = user ? loginOrLogoutOptionsData.loggedIn : loginOrLogoutOptionsData.loggedOut;
        const homeOptions = [...homePageOptions, ...loginOrLogoutOptions, ...userOptions];
        return (
            <HeroPage heroHeightPercentage={35}>
                <ImageSlider pager imagesData={homePageSliderImagesData} options={defaultImageSliderOptions} />
                <TilesGrid colProps={colProps} gridProps={gridProps} rowProps={rowProps} tilesInfo={homeOptions} />
            </HeroPage>
        );
    }
}

export default withChangedTitle("N.D.R.K")(withUser(HomePage));