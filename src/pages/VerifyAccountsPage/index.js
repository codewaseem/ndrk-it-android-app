import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import { IonText, IonRefresher, IonRefresherContent } from "@ionic/react";
import SectionedPage from "../SectionedPage";
import UserInfoCardList from "../../components/UserInfoCardList";
import { FormImage } from "../../components/FormItems";
import imgNoVerify from "../../images/no-verify.svg";
import { connect } from "react-redux";
import { getUnverifiedAccountsAction } from "../../store/actions";

class VerifyAccountsPage extends Component {

    state = {
        accounts: []
    }

    async componentDidMount() {
        this.getAccounts();
    }

    getAccounts = async () => {
        let accounts = await this.props.getUnverifiedAccounts();
        if (accounts && accounts.length) {
            this.setState(() => {
                return {
                    accounts
                };
            });
        }
    }
    doRefresh = async (...args) => {
        console.log(args);
        this.getAccounts();
    }
    render() {
        if (!this.state.accounts.length) {
            return (
                <CenteredPage>
                     <IonRefresher onIonRefresh={this.doRefresh}>
                                    <IonRefresherContent>
                                        
                                    </IonRefresherContent>
                                </IonRefresher>
                    <FormImage src={imgNoVerify} />
                    <p>
                        <IonText color="dark">
                            No accounts to verify
                    </IonText>
                    </p>
                </CenteredPage>
            )
        } else {
            return (
                <SectionedPage sectionsMap={[
                    {
                        name: "Accounts to verify",
                        component: (props) => (
                            <React.Fragment>
                                <IonRefresher onIonRefresh={this.doRefresh}>
                                    <IonRefresherContent>
                                        
                                    </IonRefresherContent>
                                </IonRefresher>
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
        getUnverifiedAccounts: () => {
            return dispatch(getUnverifiedAccountsAction("You have some accounts to verify", "No accounts to verify"));
        }
    }
}

export default connect(null, mapDispatchToProps)(VerifyAccountsPage);