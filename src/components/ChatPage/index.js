import React, { Component } from "react";
import "./style.css";
import { IonButton, IonTextarea, IonIcon } from "@ionic/react";

const MessageBox = ({ from, me, message, datetime }) => {
    return (
        <section className={`message-box-container ${me ? "me" : "you"}`}>
            <header>
                {from} {me ? "(Me)" : ""}
            </header>
            <article>
                {message}
            </article>
            <footer>
                {new Date().toLocaleTimeString()}
            </footer>
        </section>
    );
}

class ChatPage extends Component {
    render() {
        return (
            <section className="chat-page">
                <section className="messages">
                    <MessageBox from="Darshan" message="When is the last date to submit the assignment?" />
                    <MessageBox me from="Chandan" message="I don't know." />
                    <MessageBox from="Nayan" message="Last date is next monday." />
                    <MessageBox from="Darshan" message="Thanks!" />
                    <MessageBox me from="Chandan" message="Thanks bro!" />
                    <MessageBox me from="Chandan" message="Did you guys finish the assignment?" />
                    <MessageBox from="Nayan" message="No!" />
                    <MessageBox from="Darshan" message="Not yet!" />
                </section>
                <section className="write-message">
                    <IonTextarea style={{ maxWidth: "80%", height: "40px", background: "white", borderRadius: "20px" }} placeholder="Type a message"></IonTextarea>
                    <IonButton style={{ marginLeft: "5px" }} color="dark" shape="round"><IonIcon name="send"></IonIcon></IonButton>
                </section>
            </section>
        )
    }
}


export default ChatPage;