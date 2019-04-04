import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import { IonText } from "@ionic/react";
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
        let accounts = await this.props.getUnverifiedAccounts();
        if (accounts && accounts.length) {
            this.setState(() => {
                return {
                    accounts
                };
            });
        }
    }

    render() {
        if (!this.state.accounts.length) {
            return (
                <CenteredPage>
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
                        component: (props) => (<UserInfoCardList users={this.state.accounts} />)
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

export default connect(null, mapDispatchToProps)(VerifyAccountsPage);