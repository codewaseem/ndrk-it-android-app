import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import { IonText } from "@ionic/react";
import SectionedPage from "../SectionedPage";
import UserInfoCardList from "../../components/UserInfoCardList";
import { FormImage } from "../../components/FormItems";
import imgNoVerify from "../../images/no-verify.svg";
import { connect } from "react-redux";
import { getFaculty } from "../../store/actions";
import { withChangedTitle } from "../../context";

class ViewFacultyPage extends Component {

    state = {
        fetched:false,
        accounts: []
    }

    async componentDidMount() {
        this.getAccounts();
    }

    getAccounts = async () => {
        let accounts = await this.props.getFaculty();
        if (accounts) {
            this.setState(() => {
                return {
                    accounts,
                    fetched:true
                };
            });
        }
    }
    doRefresh = async (...args) => {
        this.getAccounts();
    }
    render() {
        if (!this.state.accounts.length) {
            return (
                <CenteredPage>
                    
                    <FormImage src={imgNoVerify} />
                    <p>
                        <IonText color="dark">
                            {this.state.fetched && this.state.accounts.length === 0 ? "No faculty members yet." : "Getting faculty members..."}
                    </IonText>
                    </p>
                </CenteredPage>
            )
        } else {
            return (
                <SectionedPage sectionsMap={[
                    {
                        name: "All faculty members",
                        component: (props) => (
                            <React.Fragment>
                                
                                <UserInfoCardList users={this.state.accounts} />
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
        getFaculty: () => {
            return dispatch(getFaculty());
        }
    }
}

export default connect(null, mapDispatchToProps)(withChangedTitle("Faculty Members")(ViewFacultyPage));