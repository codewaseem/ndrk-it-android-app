import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import SectionedPage from "../SectionedPage";
import { FormImage } from "../../components/FormItems";
import imgNoVerify from "../../images/no-verify.svg";
import { connect } from "react-redux";
import { getUpcomingEvents } from "../../store/actions";
import { withChangedTitle } from "../../context";
import { IonCard, IonCardSubtitle, IonCardHeader, IonText, IonCardTitle, IonCardContent } from "@ionic/react";

class ViewEventsPage extends Component {

    state = {
        fetched: false,
        events: []
    }

    async componentDidMount() {
        this.getEvents();
    }

    getEvents = async () => {
        let type = "branch";
        if (this.props.location.pathname === "/common-events")
            type = "all";

        let events = await this.props.getEvents(type);
        if (events) {
            this.setState(() => {
                return {
                    events,
                    fetched: true
                };
            });
        }
    }

    render() {
        if (!this.state.events.length) {
            return (
                <CenteredPage>
                    <FormImage src={imgNoVerify} />
                    <p>
                        <IonText color="dark">
                            {this.state.fetched && this.state.events.length === 0 ? "No events added yet." : "Getting events..."}
                        </IonText>
                    </p>
                </CenteredPage>
            )
        } else {
            return (
                <SectionedPage sectionsMap={[
                    {
                        name: "Events",
                        component: (props) => (
                            <React.Fragment>
                                {this.state.events.map(event => {
                                    let date = new Date(event.datetime);
                                    let hours = date.getHours();
                                    let amOrPm = (hours % 24) >= 12 ? "PM" : "AM";
                                    let minutes = date.getMinutes();
                                    hours = hours % 12 === 0 ? 12 : hours % 12;

                                    return (
                                        <IonCard key={event.datetime}>
                                            <IonCardHeader style={{ padding: "10px" }}>
                                                <IonCardTitle>{event.name}</IonCardTitle>
                                                <IonCardSubtitle>On {date.toLocaleDateString()}, Starts at {hours < 10 ? "0" + hours : hours}:{minutes < 10 ? "0" + minutes : minutes} {amOrPm}</IonCardSubtitle>
                                            </IonCardHeader>
                                            <IonCardContent>
                                                <IonText>
                                                    {event.description}
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
        getEvents: (branchType) => {
            return dispatch(getUpcomingEvents(branchType));
        }
    }
}

export default connect(null, mapDispatchToProps)(withChangedTitle("Events")(ViewEventsPage));