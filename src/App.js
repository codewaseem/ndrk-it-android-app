import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import StudentSignUpPage from "./pages/StudentSignUpPage";
import FacultySignUpPage from "./pages/FacultySignUpPage";
import StudentHome from "./components/StudentHome";
import FacultyHome from "./components/FacultyHome";
import AdminHome from "./components/AdminHome";
import AddEventPage from "./pages/AddEventPage";
import AddCircularPage from "./pages/AddCircularPage";
import ChatPage from "./components/ChatPage";
import HomePage from "./pages/HomePage";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import {
  IonApp,
  IonContent,
} from '@ionic/react';
import { RoutesURL } from './staticData';

class App extends Component {
  
  render() {
    return (
      <Router>
        <IonApp>
          <Header title="4th Year CS Chat" />
          <IonContent>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route exact path={RoutesURL.SIGNUP} component={SignUpPage} />
            <Route path={RoutesURL.STUDENT_SIGNUP} component={StudentSignUpPage} />
            <Route path={RoutesURL.FACULTY_SIGNUP} component={FacultySignUpPage} />
            {/* <Route exact path="/" component={HomePage} /> */}

            {/* <HomePage></HomePage>
            <LoginPage />
            <StudentSignUpPage />
            <FacultySignUpPage /> */}
            {/* <StudentHome /> */}
            {/* <FacultyHome /> */}
            {/* <AdminHome /> */}
            {/* <AddEventPage />
            <AddCircularPage /> */}
            {/* <ChatPage /> */}
          </IonContent>
        </IonApp>
      </Router>
    );
  }
}

export default App;