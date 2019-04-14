import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import { IonInput, IonSelectOption } from "@ionic/react";
import { FormItem, Form, FormButton, FormImage, FormIconLabel, FormImageLabel, SelectInput } from "../../components/FormItems";
import { withChangedTitle, withUser, withNotify } from "../../context";
import { uploadStudyMaterial } from "../../store/actions";
import { connect } from "react-redux";
import { Capacitor } from "@capacitor/core";
import mime from "mime";
import { studyMaterial as imgStudy, year as imgYear  } from "../../staticData/images";


class AddStudyMaterialPage extends Component {

    state = {
        title: "",
        academicYear: "",
        file:null,
        uri:""
    }

    fileInput = React.createRef();

    maxFileSizeLimit = 5; //mb (size/1024)/1024).toFixed(4); /

    onSubmitHandler = async (e) => {
        e.preventDefault();

        let file = null; 
        if(Capacitor.isNative) {
            file = this.state.file
        } else {
            file  = this.fileInput.current.firstElementChild.files[0];
        }

        if(!file) {
            this.props.notify("No input", "No file selected/doesn't exists", "error");
            return;
        }

        let { size } = file;
        let title = this.state.title;
        let forYear = this.state.academicYear;
        if (size / (1024 * 1024) > this.maxFileSizeLimit) {
            this.props.notify("Limit Exceed", "Please upload files below 5MB", "error");
            return;
        } else {
            let done = await this.props.uploadStudyMaterial({
                title,
                fileData: file,
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
                title: "",
                academicYear: "",
                file:null,
                uri:""
            }
        });
    }

    pickFile = async () => {
        if(!Capacitor.isNative) {
            return;
        } else {
            this.handleNativeFileSelect();
        }        
    }

    handleNativeFileSelect = async () => {
        if(Capacitor && Capacitor.isNative && Capacitor.Plugins.FilePicker) {
            let fileInfo = await Capacitor.Plugins.FilePicker.pick();
            
            let fileBlob = await fetch(window.Ionic.WebView.convertFileSrc(fileInfo.uri)).then(r => r.blob());
            let ext = mime.getExtension(fileBlob.type);
            let file = new File([fileBlob],`file.${ext}`);
            this.setState(() => {
               return {
                   file,
                   uri: fileInfo.uri
               }
            });

        } else {
            console.log("Filepicker plugin not installed");
        }
    }

    render() {
        return (
            <CenteredPage>
                <FormImage src={imgStudy} alt={"Add Study"} />
                <Form onSubmit={this.onSubmitHandler} name="add-study">
                    <FormItem>
                        <FormIconLabel iconName="text" />
                        <IonInput name="title" onIonChange={this.onChangeHandler} required value={this.state.title} placeholder="Name" type="text"></IonInput>
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
                    <FormItem onClick={this.pickFile}>
                        <FormIconLabel iconName="document" />
                        <IonInput required name="file" ref={this.fileInput} placeholder="Select File" type={Capacitor.isNative? "url" : "file"} value={this.state.uri ? this.state.uri : ""  }></IonInput>
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