import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Header from './components/Header';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./store";

/*

<intent-filter>
                <action android:name="android.intent.action.GET_CONTENT" />
                <category android:name="android.intent.category.OPENABLE" />
                <category android:name="android.intent.category.DEFAULT" />
            </intent-filter>
*/

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

const startApp = () => {
    ReactDOM.render(<Root store={store} />, document.getElementById('root'));
}

if (!window.cordova) {
    startApp();
} else {
    console.log("Starting with cordova");
    document.addEventListener('deviceready', startApp, false);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
