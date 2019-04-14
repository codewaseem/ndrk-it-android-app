import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import { IonText } from "@ionic/react";
import SectionedPage from "../SectionedPage";
import UserInfoCardList from "../../components/UserInfoCardList";
import { FormImage } from "../../components/FormItems";
import { connect } from "react-redux";
import { getUnverifiedAccountsAction } from "../../store/actions";
import { withChangedTitle, onlyAdmin } from "../../context";
import { noVerify as imgNoVerify } from "../../staticData";

class VerifyAccountsPage extends Component {

    state = {
        fetched: false,
        accounts: []
    }

    async componentDidMount() {
        this.getAccounts();
    }

    getAccounts = async () => {
        let accounts = await this.props.getUnverifiedAccounts();
        console.log("A", accounts);
        if (accounts) {
            this.setState(() => {
                return {
                    accounts,
                    fetched: true
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
                            {this.state.fetched && this.state.accounts.length === 0 ? "No accounts to verify." : "Getting accounts..."}
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
            return dispatch(getUnverifiedAccountsAction());
        }
    }
}

export default connect(null, mapDispatchToProps)(onlyAdmin(withChangedTitle("Pending Verifications")(VerifyAccountsPage)));