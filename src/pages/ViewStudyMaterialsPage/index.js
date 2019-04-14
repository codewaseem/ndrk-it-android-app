import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import SectionedPage from "../SectionedPage";
import { FormImage } from "../../components/FormItems";
import { connect } from "react-redux";
import { getStudyMaterials } from "../../store/actions";
import { withChangedTitle } from "../../context";
import { IonGrid, IonRow, IonCol, IonCard, IonLabel, IonIcon, IonCardSubtitle, IonCardHeader, IonText, IonButton } from "@ionic/react";
import { getPostfixedYear } from "../../helpers";
import { noVerify as imgNoVerify } from "../../staticData/images";

class ViewStudyMaterials extends Component {

    state = {
        fetched: false,
        materials: []
    }

    async componentDidMount() {
        this.getStudyMaterials();
    }

    getStudyMaterials = async () => {
        let materials = await this.props.getStudyMaterials();
        if (materials) {
            this.setState(() => {
                return {
                    materials,
                    fetched: true
                };
            });
        }
    }

    render() {
        if (!this.state.materials.length) {
            return (
                <CenteredPage>
                    <FormImage src={imgNoVerify} />
                    <p>
                        <IonText color="dark">
                            {this.state.fetched && this.state.materials.length === 0 ? "No study materials yet." : "Getting study materials..."}
                        </IonText>
                    </p>
                </CenteredPage>
            )
        } else {
            return (
                <SectionedPage sectionsMap={[
                    {
                        name: "Study Materials",
                        component: (props) => (
                            <React.Fragment>
                                {this.state.materials.map(material => {
                                    return (
                                        <IonCard key={material.file_url}>
                                            <IonCardHeader style={{ padding: "10px" }}>
                                                <IonCardSubtitle>Document Name: {material.title}</IonCardSubtitle>
                                            </IonCardHeader>
                                            <IonGrid>
                                                <IonRow>
                                                    <IonCol>
                                                        <IonIcon name="person"></IonIcon>
                                                        From <IonLabel color="primary">{material.postedBy}</IonLabel>
                                                    </IonCol>
                                                    <IonCol size="3">
                                                        <IonIcon name="attach"></IonIcon>
                                                        <IonLabel color="danger" style={{ textTransform: "capitalize" }}>{((material.size / 1024) / 1024).toFixed(2)} MB </IonLabel>
                                                    </IonCol>
                                                </IonRow>

                                                <IonRow>
                                                    <IonCol size="4">
                                                        <IonIcon name="git-merge" />
                                                        Branch <IonLabel color="dark" style={{ textTransform: "uppercase" }}>{material.branch}</IonLabel>
                                                    </IonCol>
                                                    <IonCol size="4">
                                                        <IonIcon name="calendar" />
                                                        <IonLabel color="dark"> For {getPostfixedYear(material.forYear)} year</IonLabel>
                                                    </IonCol>
                                                    <IonCol size="4" pull="right" >
                                                        <a href={material.file_url} target="_blank" rel="noopener noreferrer" download><IonButton size="small"><IonIcon name="download" /> Download </IonButton></a>
                                                    </IonCol>
                                                </IonRow>
                                                <IonRow>

                                                </IonRow>
                                            </IonGrid>
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
        getStudyMaterials: () => {
            return dispatch(getStudyMaterials());
        }
    }
}

export default connect(null, mapDispatchToProps)(withChangedTitle("Study Material")(ViewStudyMaterials));