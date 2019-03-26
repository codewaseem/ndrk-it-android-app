import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";

import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonTitle,
  IonToolbar,
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
        <Header title="Login" />
        <IonContent>
          {/* <MainPage></MainPage> */}
          <LoginPage />
        </IonContent>
      </IonApp>
    );
  }
}

export default App;