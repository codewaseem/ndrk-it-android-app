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
  IonContent
} from '@ionic/react';
import { RoutesURL } from './staticData';
import { TitleContext, withUser } from './context';
import { connect } from "react-redux";
import ReduxBlockUi from 'react-block-ui/redux';
import 'react-block-ui/style.css';
import { START_NETWORK_REQUEST, NETWORK_REQUEST_SUCCESS, NETWORK_REQUEST_FAILURE } from './store/actions';
import 'font-awesome/css/font-awesome.min.css';
import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';

class App extends Component {


  changeTitle = (newTitle) => {
    this.setState(() => ({
      title: newTitle
    }));
  }

  state = {
    title: "N.D.R.K",
    changeTitle: this.changeTitle,
  }

  componentDidMount() {
    !this.props.user && this.props.checkLogin();
  }

  render() {

    return (
      <ReduxBlockUi tag="div" keepInView style={{ height: "100vh" }} message={this.props.ui.fetchingMessage} block={START_NETWORK_REQUEST} unblock={[NETWORK_REQUEST_SUCCESS, NETWORK_REQUEST_FAILURE]} >
        <NotificationsSystem theme={theme} />
        <Router>
          <IonApp>
            <TitleContext.Provider value={this.state}>
              <Header />
              <IonContent>
                <Route exact path="/" component={HomePage} />
                <Route path={RoutesURL.LOGIN} component={LoginPage} />
                <Route exact path={RoutesURL.SIGNUP} component={SignUpPage} />
                <Route path={RoutesURL.STUDENT_SIGNUP} component={StudentSignUpPage} />
                <Route path={RoutesURL.FACULTY_SIGNUP} component={FacultySignUpPage} />
              </IonContent>
            </TitleContext.Provider>
          </IonApp>
        </Router>
      </ReduxBlockUi>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    ui: state.ui,
  }
}

export default withUser(connect(mapStateToProps)(App));