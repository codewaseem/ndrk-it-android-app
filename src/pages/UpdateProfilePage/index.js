import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import { Form, FormItem, FormIconLabel, FormImageLabel, SelectInput, FormButton } from "../../components/FormItems";
import { IonInput, IonSelectOption, IonText } from "@ionic/react";
import { FormImage } from "../../components/FormItems";
import { Gender_Options, User_Types } from "../../server";
import { connect } from "react-redux";
import { findUserByEmailAction, setVerified, updateUserInfo, deleteUser } from "../../store/actions";
import { withChangedTitle, onlyAdmin } from "../../context";
import { usn as imgUsn, update as imgUpdate, name as imgName, year as imgYear, branch as imgBranch, noVerify as imgNoVerify, RoutesURL } from "../../staticData";
import { Redirect } from "react-router";


class UpdateProfilePage extends Component {
    state = {
        showUpdateForm: false,
        fetched: false,
        type: "",
        name: "",
        usn: "",
        branch: "cs",
        gender: "male",
        email: "",
        academicYear: 1,
        graduated: false,
        verified: true,
        facId: "",
        redirect:false
    }

    onChangeHandler = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        this.setState(() => {
            return {
                [fieldName]: fieldValue
            }
        });
    }

    async componentDidMount() {

        if (this.props.match.params.email && !this.state.showUpdateForm) {
            const user = await this.props.findByEmail(this.props.match.params.email);
            if (user) {
                const { type, name, usn, branch, gender, email, academicYear, graduated, verified, facId } = user;
                this.setState(() => {
                    return {
                        showUpdateForm: true,
                        fetched: true,
                        type,
                        name,
                        usn,
                        branch,
                        gender,
                        email,
                        academicYear,
                        graduated,
                        verified,
                        facId
                    }
                });

            } else {
                this.setState(() => {
                    return {
                        fetched: true
                    }
                });
            }

        }
    }

    onUpdate = async () => {
        let updatedData = await this.props.updateUserInfo(this.state.email, this.state);

        this.setState(() => {
            return {
                ...updatedData
            }
        });
    }

    setVerified = async () => {
        let { email } = this.state;
        let updatedData = await this.props.setVerified(email);
        this.setState(() => {
            return {
                verified: updatedData.verified
            }
        });
    }

    deleteUser = async () => {
        let done = await this.props.deleteUser(this.state.email);
        if(done) {
            this.setState(() => {
                return {
                    redirect : true
                }
            });
        }
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={RoutesURL.ADMIN_HOME} />
        }
        if (this.state.showUpdateForm) {

            return (
                <CenteredPage>
                    <FormImage src={imgUpdate} />
                    <Form name="update-profile" onSubmit={(e) => e.preventDefault()}>
                        <FormItem>
                            <FormImageLabel imgSrc={imgName} />
                            <IonInput onIonChange={this.onChangeHandler} required name="name" value={this.state.name} type="text" placeholder="Name"></IonInput>
                        </FormItem>

                        <FormItem>
                            <FormImageLabel imgSrc={imgBranch} />
                            <SelectInput interfaceOptions={{ header: "Branch" }} onIonChange={this.onChangeHandler} required name="branch" value={this.state.branch} placeholder="Department">
                                <IonSelectOption value="cs">Computer Science</IonSelectOption>
                                <IonSelectOption value="ec">Electronics</IonSelectOption>
                                <IonSelectOption value="cv">Civil</IonSelectOption>
                                <IonSelectOption value="me">Mechanical</IonSelectOption>
                            </SelectInput>
                        </FormItem>
                        <FormItem>
                            <FormIconLabel iconName="male">Gender</FormIconLabel>
                            <SelectInput interfaceOptions={{ header: "Gender" }} style={{ textTransform: "capitalize" }} required={true} onIonChange={this.onChangeHandler} value={this.state.gender} name="gender" placeholder="Gender">
                                {
                                    Object.keys(Gender_Options).map(genderKey => {
                                        return <IonSelectOption key={genderKey} value={Gender_Options[genderKey]}>{Gender_Options[genderKey]}</IonSelectOption>
                                    })
                                }
                            </SelectInput>
                        </FormItem>

                        {(this.state.type === User_Types.Student) &&

                            <React.Fragment>
                                <FormItem>
                                    <FormImageLabel imgSrc={imgUsn} />
                                    <IonInput required={true} onIonChange={this.onChangeHandler} maxlength="10" name="usn" value={this.state.usn} type="text" style={{ textTransform: "uppercase" }} pattern="[1-4](YG|yg)[0-9]{2}(CS|cs|EC|ec|CV|cv|ME|me)[0-9]{3}" placeholder="USN"></IonInput>
                                </FormItem>
                                <FormItem>
                                    <FormImageLabel imgSrc={imgYear} />
                                    <SelectInput interfaceOptions={{ header: "Current Academic Year" }} required={true} onIonChange={this.onChangeHandler} value={+this.state.academicYear} name="academicYear" placeholder="Current Year">
                                        <IonSelectOption value={1}>1st Year</IonSelectOption>
                                        <IonSelectOption value={2}>2nd Year</IonSelectOption>
                                        <IonSelectOption value={3}>3rd Year</IonSelectOption>
                                        <IonSelectOption value={4}>4th Year</IonSelectOption>
                                    </SelectInput>
                                </FormItem>
                                <FormItem>
                                    <FormIconLabel iconName="rocket" />
                                    Graduated?
                                    <SelectInput interfaceOptions={{ header: "Is Graduated?" }} required={true} onIonChange={this.onChangeHandler} value={+this.state.graduated} name="graduated" placeholder="Graduated">
                                        <IonSelectOption value={1}>Yes</IonSelectOption>
                                        <IonSelectOption value={0}>No</IonSelectOption>
                                    </SelectInput>
                                </FormItem>
                            </React.Fragment>

                        }
                        {(this.state.type === User_Types.Faculty) &&
                            <React.Fragment>
                                <FormItem>
                                    <FormImageLabel imgSrc={imgUsn} />
                                    <IonInput required={true} onIonChange={this.onChangeHandler} maxlength="10" name="facId" value={this.state.facId} type="text" placeholder="Faculty's ID"></IonInput>
                                </FormItem>
                            </React.Fragment>
                        }
                        <FormItem>
                            <FormIconLabel iconName="mail" />
                            <IonInput disabled onIonChange={this.onChangeHandler} required name="email" value={this.state.email} type="email" placeholder="Email"></IonInput>
                        </FormItem>
                        {!this.state.verified && <FormButton onClick={this.setVerified} type="button" color="primary" buttonText="Verify Account" />}
                        <FormButton onClick={this.deleteUser} type="button" color="danger" buttonText={this.state.verified ? "Delete" : "Reject"} />
                        <FormButton type="button" onClick={this.onUpdate} buttonText="Update Details" />
                    </Form>

                </CenteredPage>
            )
        } else {
            return (
                <CenteredPage>
                    <FormImage src={imgNoVerify} />
                    <p>
                        <IonText color="dark">
                            {this.state.fetched && !this.state.showUpdateForm ? "No data received for the given email" : "Getting data..."}
                        </IonText>
                    </p>
                </CenteredPage>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findByEmail: (email) => {
            return dispatch(findUserByEmailAction(email));
        },
        setVerified: (email) => {
            return dispatch(setVerified(email, "Account verified!", "Verification failed! Try Again!"));
        },
        updateUserInfo: (email, data) => {
            return dispatch(updateUserInfo(email, data, "Account details updated!", "Failed to update account details"));
        },
        deleteUser: (email) => {
            return dispatch(deleteUser(email));
        }
    }
}

export default connect(null, mapDispatchToProps)(onlyAdmin(withChangedTitle("Verify/Update")(UpdateProfilePage)));