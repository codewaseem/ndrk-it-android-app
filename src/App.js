import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import StudentSignUpPage from "./pages/StudentSignUpPage";
import FacultySignUpPage from "./pages/FacultySignUpPage";
// import StudentHome from "./components/StudentHome";
// import FacultyHome from "./components/FacultyHome";
// import AdminHome from "./components/AdminHome";
// import AddEventPage from "./pages/AddEventPage";
// import AddCircularPage from "./pages/AddCircularPage";
// import ChatPage from "./components/ChatPage";
import HomePage from "./pages/HomePage";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import {
  IonApp,
  IonContent,
} from '@ionic/react';
import { RoutesURL } from './staticData';
import { TitleContext } from './context';



class App extends Component {


  changeTitle = (newTitle) => {
    this.setState(() => ({
      title: newTitle
    }));
  }

  state = {
    title: "N.D.R.K",
    changeTitle: this.changeTitle
  }

  render() {
    return (
      <Router>
        <IonApp>
          <TitleContext.Provider value={this.state}>
            <Header />
            <IonContent>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route exact path={RoutesURL.SIGNUP} component={SignUpPage} />
              <Route path={RoutesURL.STUDENT_SIGNUP} component={StudentSignUpPage} />
              <Route path={RoutesURL.FACULTY_SIGNUP} component={FacultySignUpPage} />
            </IonContent>
          </TitleContext.Provider>
        </IonApp>
      </Router>
    );
  }
}

export default App;