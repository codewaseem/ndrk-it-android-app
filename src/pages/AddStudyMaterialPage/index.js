import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import imgStudy from "../../images/study_material.svg";
import imgYear from "../../images/year.svg";
import { IonInput, IonSelectOption } from "@ionic/react";
import { FormItem, Form, FormButton, FormImage, FormIconLabel, FormImageLabel, SelectInput } from "../../components/FormItems";
import { withChangedTitle, withUser, withNotify } from "../../context";
import { uploadStudyMaterial } from "../../store/actions";
import { connect } from "react-redux";
import { FileChooser } from "@ionic-native/file-chooser";
import { AndroidPermissions } from "@ionic-native/android-permissions";
import { FilePickerPlugin} from "capacitor-filepicker-plugin";

window.FileChooser = FileChooser;
window.FilePickerPlugin = FilePickerPlugin;

class AddStudyMaterialPage extends Component {

    state = {
        name: "",
        academicYear: ""
    }

    fileInput = React.createRef();

    maxFileSizeLimit = 5; //mb (size/1024)/1024).toFixed(4); /

    onSubmitHandler = async (e) => {
        e.preventDefault();
        let file = this.fileInput.current.firstElementChild.files[0];
        let { name, size, type } = file;
        let title = this.state.name;
        let forYear = this.state.academicYear;
        if (size / (1024 * 1024) > this.maxFileSizeLimit) {
            this.props.notify("Limit Exceed", "Please upload files below 5MB", "error")
        } else {
            let done = await this.props.uploadStudyMaterial({
                title,
                name,
                fileData: file,
                type,
                forYear
            });

            if (done) {
                this.resetForm();
            }
        }

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

    resetForm = () => {
        this.fileInput.current.firstElementChild.value = "";
        this.setState(() => {
            return {
                name: "",
                academicYear: ""
            }
        });
    }

    onFileChooserClick = async () => {
        if(window.cordova) {
            alert("Select file");
            window.AndroidPermissions = AndroidPermissions;
            FileChooser.open().then(async (uri) => {
                let fileUrl = window.Ionic.WebView.convertFileSrc(uri);
                window.receivedUri = uri;
                window.fileUrl = fileUrl;
                let blob = await fetch(fileUrl).then(r => r.blob());
                window.blob = blob;
                window.finalFile = new File([blob], "name");

            }).catch(console.error);
        }        

    }

    render() {
        return (
            <CenteredPage>
                <FormImage src={imgStudy} alt={"Add Study"} />
                <Form onSubmit={this.onSubmitHandler} name="add-study">
                    <FormItem>
                        <FormIconLabel iconName="text" />
                        <IonInput name="name" onIonChange={this.onChangeHandler} required value={this.state.name} placeholder="Name" type="text"></IonInput>
                    </FormItem>
                    <FormItem>
                        <FormImageLabel imgSrc={imgYear} />
                        <SelectInput interfaceOptions={{ header: "Academic Year" }} required={true} onIonChange={this.onChangeHandler} value={this.state.academicYear} name="academicYear" placeholder="For which year students?">
                            <IonSelectOption value="1">1st Year</IonSelectOption>
                            <IonSelectOption value="2">2nd Year</IonSelectOption>
                            <IonSelectOption value="3">3rd Year</IonSelectOption>
                            <IonSelectOption value="4">4th Year</IonSelectOption>
                        </SelectInput>
                    </FormItem>
                    <FormItem onClick={this.onFileChooserClick}>
                        <FormIconLabel iconName="document" />
                        <IonInput required name="file" ref={this.fileInput} placeholder="Select File" type="file" accept=".pdf"></IonInput>
                    </FormItem>
                    <FormButton iconName="cloud-upload" buttonText="Upload" />
                </Form>
            </CenteredPage>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadStudyMaterial: (data) => {
            return dispatch(uploadStudyMaterial(data));
        }
    }
}

export default connect(null, mapDispatchToProps)(withNotify(withUser((withChangedTitle("Add Study Material")(AddStudyMaterialPage)))));