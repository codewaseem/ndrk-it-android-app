import React, { Component } from "react";
import Page from "../Page";

class HeroPage extends Component {
    render() {
        let [heroComponent, nonHeroComponents] = React.Children.toArray(this.props.children);
        let heroHeightPercentage = this.props.heroHeightPercentage || 25;
        return (
            <Page>
                <section style={{ height: `${heroHeightPercentage}%` }}>
                    {heroComponent}
                </section>
                <section style={{ height: `${100 - heroHeightPercentage}%` }}>
                    <React.Fragment>
                        {nonHeroComponents}
                    </React.Fragment>
                </section>
            </Page>
        );
    }
}

export default HeroPage;