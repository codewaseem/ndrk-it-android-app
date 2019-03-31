import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import StudentSignUpPage from "./pages/StudentSignUpPage";
import FacultySignUpPage from "./pages/FacultySignUpPage";
import StudentHome from "./components/StudentHome";
import FacultyHome from "./components/FacultyHome";
import AdminHome from "./components/AdminHome";
import AddEventPage from "./components/AddEvent";
import AddCircularPage from "./components/AddCircular";
import ChatPage from "./components/ChatPage";
import HomePage from "./pages/HomePage";
import "./App.css";

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
        <Header title="4th Year CS Chat" />
        <IonContent>
          <HomePage></HomePage>
          <LoginPage />
          <StudentSignUpPage />
          <FacultySignUpPage />
          {/* <StudentHome /> */}
          {/* <FacultyHome /> */}
          {/* <AdminHome /> */}
          {/* <AddEventPage /> */}
          {/* <AddCircularPage /> */}
          {/* <ChatPage /> */}
        </IonContent>
      </IonApp>
    );
  }
}

export default App;