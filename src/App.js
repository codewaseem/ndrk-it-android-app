import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import {
  IonApp,
  IonContent
} from '@ionic/react';
import ReduxBlockUi from 'react-block-ui/redux';
import 'react-block-ui/style.css';
import 'font-awesome/css/font-awesome.min.css';
import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';
import { connect } from "react-redux";

import { START_NETWORK_REQUEST, NETWORK_REQUEST_SUCCESS, NETWORK_REQUEST_FAILURE } from './store/actions';
import { RoutesURL } from './staticData';
import { withUser } from './context';
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import StudentSignUpPage from "./pages/StudentSignUpPage";
import FacultySignUpPage from "./pages/FacultySignUpPage";
import FacultyHomePage from "./pages/FacultyHomePage";
import LogoutPage from './pages/LogoutPage';
import HomePage from "./pages/HomePage";
import AdminHomePage from './pages/AdminHomePage';
import FourNotFourPage from './pages/FourNotFourPage';
import StudentHomePage from './pages/StudentHomePage';
import ViewEventsPage from './pages/ViewEventsPage';
import ViewCircularsPage from './pages/ViewCircularsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import DepartmentsPage from './pages/DepartmentsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import GalleryPage from './pages/GalleryPage';
import AboutUsPage from './pages/AboutUsPage';
import LocateUsPage from './pages/LocateUsPage';
import ContactPage from './pages/ContactPage';

class App extends Component {

  componentDidMount() {
    !this.props.user && this.props.checkLogin();
  }

  render() {

    return (
      <ReduxBlockUi tag="div" keepInView style={{ height: "100vh" }} message={this.props.ui.fetchingMessage} block={START_NETWORK_REQUEST} unblock={[NETWORK_REQUEST_SUCCESS, NETWORK_REQUEST_FAILURE]} >
        <NotificationsSystem theme={theme} />
        <Router>
          <IonApp>
              <Header />
              <IonContent>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path={RoutesURL.LOGIN} component={LoginPage} />
                  <Route exact path={RoutesURL.SIGNUP} component={SignUpPage} />
                  <Route path={RoutesURL.STUDENT_SIGNUP} component={StudentSignUpPage} />
                  <Route path={RoutesURL.FACULTY_SIGNUP} component={FacultySignUpPage} />
                  <Route path={RoutesURL.FACULTY_HOME} component={FacultyHomePage} />
                  <Route path={RoutesURL.ADMIN_HOME} component={AdminHomePage} />
                  <Route path={RoutesURL.STUDENT_HOME} component={StudentHomePage} />
                  <Route path={RoutesURL.LOGOUT} component={LogoutPage} />
                  <Route path={RoutesURL.ADMISSIONS} component={AdmissionsPage} />
                  <Route path={RoutesURL.DEPARTMENTS} component={DepartmentsPage} />
                  <Route path={RoutesURL.EVENTS} component={ViewEventsPage} />
                  <Route path={RoutesURL.CIRCULAR} component={ViewCircularsPage} />
                  <Route path={RoutesURL.FACILITIES} component={FacilitiesPage} />
                  <Route path={RoutesURL.GALLERY} component={GalleryPage} />
                  <Route path={RoutesURL.ABOUT} component={AboutUsPage} />
                  <Route path={RoutesURL.LOCATE} component={LocateUsPage} />
                  <Route path={RoutesURL.CONTACT} component={ContactPage} />
                  <Route component={FourNotFourPage} />
                </Switch>
              </IonContent>
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