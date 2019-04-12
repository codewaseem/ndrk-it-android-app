import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import SectionedPage from "../SectionedPage";
import { FormImage } from "../../components/FormItems";
import imgNoVerify from "../../images/no-verify.svg";
import { connect } from "react-redux";
import { getCirculars } from "../../store/actions";
import { withChangedTitle } from "../../context";
import { IonCard, IonCardSubtitle, IonCardHeader, IonText, IonCardTitle, IonCardContent } from "@ionic/react";

class ViewCircularsPage extends Component {

    state = {
        fetched: false,
        circulars: []
    }

    async componentDidMount() {
        this.getCirculars();
    }

    getCirculars = async () => {
        let type = "branch";
        if (this.props.location.pathname === "/common-circulars")
            type = "all";

        let circulars = await this.props.getCirculars(type);
        if (circulars) {
            this.setState(() => {
                return {
                    circulars,
                    fetched: true
                };
            });
        }
    }

    render() {
        if (!this.state.circulars.length) {
            return (
                <CenteredPage>
                    <FormImage src={imgNoVerify} />
                    <p>
                        <IonText color="dark">
                            {this.state.fetched && this.state.circulars.length === 0 ? "No circulars added yet." : "Getting circulars..."}
                        </IonText>
                    </p>
                </CenteredPage>
            )
        } else {
            return (
                <SectionedPage sectionsMap={[
                    {
                        name: "Circulars",
                        component: (props) => (
                            <React.Fragment>
                                {this.state.circulars.map(circular => {
                                    let date = new Date(circular.endDatetime);
                                    return (
                                        <IonCard key={circular.endDatetime}>
                                            <IonCardHeader style={{ padding: "10px" }}>
                                                <IonCardTitle>{circular.name}</IonCardTitle>
                                                <IonCardSubtitle>Valid till {date.toLocaleDateString()}</IonCardSubtitle>
                                            </IonCardHeader>
                                            <IonCardContent>
                                                <IonText>
                                                    {circular.description}
                                                </IonText>
                                            </IonCardContent>
                                        </IonCard>
                                    );
                                })}
                            </React.Fragment>

                        )
                    }
                ]} />
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCirculars: (branchType) => {
            return dispatch(getCirculars(branchType));
        }
    }
}

export default connect(null, mapDispatchToProps)(withChangedTitle("Circulars")(ViewCircularsPage));