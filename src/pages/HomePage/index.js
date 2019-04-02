import React, { Component } from "react";
import HeroPage from "../HeroPage";

import { defaultImageSliderOptions, homePageSliderImagesData, homePageOptions, loginOrLogoutOptionsData } from "../../staticData";
import ImageSlider from "../../components/ImageSlider";
import TilesGrid from "../../components/TilesGrid";
import { withChangedTitle, withUser } from "../../context";

class HomePage extends Component {
    render() {
        const gridProps = { style: { height: "100%" } };
        const rowProps = { style: { height: "100%" }, "justify-content-between": true, "align-items-center": true };
        const colProps = { size: 4 };
        const { user } = this.props;
        const loginOrLogoutOptions = user ? loginOrLogoutOptionsData.loggedIn : loginOrLogoutOptionsData.loggedOut;
        return (
            <HeroPage heroHeightPercentage={35}>
                <ImageSlider pager imagesData={homePageSliderImagesData} options={defaultImageSliderOptions} />
                <TilesGrid colProps={colProps} gridProps={gridProps} rowProps={rowProps} tilesInfo={[...homePageOptions, ...loginOrLogoutOptions]} />
            </HeroPage>
        );
    }
}

export default withUser(withChangedTitle("N.D.R.K")(HomePage));