import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import { IonText } from "@ionic/react";
import SectionedPage from "../SectionedPage";
import UserInfoCardList from "../../components/UserInfoCardList";
import { FormImage } from "../../components/FormItems";
import imgNoVerify from "../../images/no-verify.svg";
import { connect } from "react-redux";
import { getStudents } from "../../store/actions";
import { withChangedTitle, onlyAdmin } from "../../context";

class ViewStudentsPage extends Component {

    state = {
        fetched: false,
        accounts: []
    }

    async componentDidMount() {
        this.getAccounts();
    }

    getAccounts = async () => {
        let accounts = await this.props.getStudents();
        if (accounts) {
            this.setState(() => {
                return {
                    accounts,
                    fetched: true
                };
            });
        }
    }
    doRefresh = async (e) => {
        this.getAccounts().then(() => {
            e.target.complete();
        });
    }
    render() {
        if (!this.state.accounts.length) {
            return (
                <CenteredPage>
                    <FormImage src={imgNoVerify} />
                    <p>
                        <IonText color="dark">
                            {this.state.fetched && this.state.accounts.length === 0 ? "No students yet." : "Getting students..."}
                        </IonText>
                    </p>
                </CenteredPage>
            )
        } else {
            return (
                <SectionedPage sectionsMap={[
                    {
                        name: "All students",
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
        getStudents: () => {
            return dispatch(getStudents());
        }
    }
}

export default connect(null, mapDispatchToProps)(onlyAdmin(withChangedTitle("All Students")(ViewStudentsPage)));