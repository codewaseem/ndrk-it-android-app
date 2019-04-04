import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import { Form, FormItem, FormIconLabel, FormImageLabel, SelectInput, FormButton } from "../../components/FormItems";
import { IonInput, IonSelectOption } from "@ionic/react";
import imgUsn from "../../images/usn.svg";
import imgName from "../../images/name.svg";
import imgYear from "../../images/year.svg";
import imgBranch from "../../images/branch.svg";
import { Gender_Options, User_Types } from "../../server";
import { connect } from "react-redux";
import { findUserByEmailAction } from "../../store/actions";


class UpdateProfilePage extends Component {
    state = {
        showUpdateForm: false,
        type: "",
        name: "",
        usn: "",
        branch: "cs",
        gender: "male",
        email: "",
        year: 1,
        graduated: false,
        verified: false
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

        if (this.props.match.params.email) {
            const user = await this.props.findByEmail(this.props.match.params.email);
            if (!user) return;

            console.log(user);
            const { type, name, usn, branch, gender, username, year, graduated, verified } = user;
            this.setState(() => {
                return {
                    showUpdateForm: true,
                    type,
                    name,
                    usn,
                    branch,
                    gender,
                    email: username,
                    year,
                    graduated,
                    verified
                }
            });
        }
    }

    render() {
        console.log("STATE", this.state);
        return (
            <CenteredPage>
                <Form name="update-profile">
                    <FormItem>
                        <FormImageLabel imgSrc={imgName} />
                        <IonInput onIonChange={this.onChangeHandler} required name="name" value={this.state.name} type="text" placeholder="Name"></IonInput>
                    </FormItem>

                    <FormItem>
                        <FormImageLabel imgSrc={imgBranch} />
                        <SelectInput onIonChange={this.onChangeHandler} required name="branch" value={this.state.branch} placeholder="Department">
                            <IonSelectOption value="cs">Computer Science</IonSelectOption>
                            <IonSelectOption value="ec">Electronics</IonSelectOption>
                            <IonSelectOption value="cv">Civil</IonSelectOption>
                            <IonSelectOption value="me">Mechanical</IonSelectOption>
                        </SelectInput>
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="male">Gender</FormIconLabel>
                        <SelectInput style={{ textTransform: "capitalize" }} required={true} onIonChange={this.onChangeHandler} value={this.state.gender} name="gender" placeholder="Gender">
                            {
                                Object.keys(Gender_Options).map(genderKey => {
                                    return <IonSelectOption key={genderKey} value={Gender_Options[genderKey]}>{Gender_Options[genderKey]}</IonSelectOption>
                                })
                            }
                        </SelectInput>
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="mail" />
                        <IonInput disabled onIonChange={this.onChangeHandler} required name="email" value={this.state.email} type="email" placeholder="Email"></IonInput>
                    </FormItem>
                    {(this.state.type === User_Types.Student) &&

                        <React.Fragment>
                            <FormItem>
                                <FormImageLabel imgSrc={imgUsn} />
                                <IonInput required={true} onIonChange={this.onChangeHandler} name="usn" value={this.state.usn} type="text" style={{ textTransform: "uppercase" }} pattern="[1-4](YG|yg)[0-9]{2}(CS|cs|EC|ec|CV|cv|ME|me)[0-9]{3}" placeholder="USN"></IonInput>
                            </FormItem>
                            <FormItem>
                                <FormImageLabel imgSrc={imgYear} />
                                <SelectInput required={true} onIonChange={this.onChangeHandler} value={this.state.year} name="year" placeholder="Current Year">
                                    <IonSelectOption value={1}>1st Year</IonSelectOption>
                                    <IonSelectOption value={2}>2nd Year</IonSelectOption>
                                    <IonSelectOption value={3}>3rd Year</IonSelectOption>
                                    <IonSelectOption value={4}>4th Year</IonSelectOption>
                                </SelectInput>
                            </FormItem>
                            <FormItem>
                                <FormImageLabel imgSrc={imgYear} />
                                <SelectInput required={true} onIonChange={this.onChangeHandler} value={this.state.graduated} name="graduated" placeholder="Graduated">
                                    <IonSelectOption value={true}>Yes</IonSelectOption>
                                    <IonSelectOption value={false}>No</IonSelectOption>
                                </SelectInput>
                            </FormItem>
                        </React.Fragment>

                    }

                    <FormButton iconName="person-add" buttonText="Update" />
                </Form>

            </CenteredPage>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findByEmail: (email) => {
            return dispatch(findUserByEmailAction(email));
        }
    }
}

export default connect(null, mapDispatchToProps)(UpdateProfilePage);