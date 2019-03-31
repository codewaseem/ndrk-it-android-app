import React, { Component } from "react";
import HeroPage from "../HeroPage";

import { defaultImageSliderOptions, homePageSliderImagesData, homePageOptions } from "../../staticData";
import ImageSlider from "../../components/ImageSlider";
import TilesGrid from "../../components/TilesGrid";
import { withChangeTitle } from "../../context";

class HomePage extends Component {

    componentDidMount() {
        this.props.changeTitle("N.D.R.K");
    }

    render() {
        const gridProps = { style: { height: "100%" } };
        const rowProps = { style: { height: "100%" }, "justify-content-between": true, "align-items-center": true };
        const colProps = { size: 4 };

        return (
            <HeroPage heroHeightPercentage={35}>
                <ImageSlider pager imagesData={homePageSliderImagesData} options={defaultImageSliderOptions} />
                <TilesGrid colProps={colProps} gridProps={gridProps} rowProps={rowProps} tilesInfo={homePageOptions} />
            </HeroPage>
        );
    }
}

export default withChangeTitle(HomePage);