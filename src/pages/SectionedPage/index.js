import React, { Component } from "react";
import Page from "../Page";
import { IonItemDivider, IonLabel } from "@ionic/react";

class SectionedPage extends Component {

    render() {
        const sections = this.props.sectionsMap || [];
        return (
            <Page>
                {sections.map(section => {
                    const Section = section.component;
                    const sectionName = section.name;
                    return (<React.Fragment key={sectionName}>
                        <IonItemDivider>
                            <IonLabel>
                                {sectionName}
                            </IonLabel>
                        </IonItemDivider>
                        {Section && <Section />}
                        {Section && <IonItemDivider />}
                    </React.Fragment>);
                })}
            </Page>
        );
    }
}

export default SectionedPage;