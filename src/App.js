import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import StudentSignUpPage from "./components/StudentSignUpPage";
import FacultySignUpPage from "./components/FacultySignUp";
import StudentHome from "./components/StudentHome";

import {
  IonApp,
  IonContent,
} from '@ionic/react';

class App extends Component {
  state = {
    chomps: 0,
  };
  unchomp = () => {
    if (this.state.chomps > 0) {
      this.setState({
        chomps: this.state.chomps -= 1,
      });
    }
  };
  chomp = () => {
    this.setState({
      chomps: this.state.chomps += 1,
    });
  };

  render() {
    return (
      <IonApp>
        <Header title="Student Menu" />
        <IonContent>
          {/* <MainPage></MainPage> */}
          {/* <LoginPage /> */}
          {/* <StudentSignUpPage /> */}
          {/* <FacultySignUpPage /> */}
          <StudentHome />
        </IonContent>
      </IonApp>
    );
  }
}

export default App;