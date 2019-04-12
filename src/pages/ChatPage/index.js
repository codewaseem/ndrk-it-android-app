import React, { Component } from "react";
import "./style.css";
import { IonButton, IonTextarea, IonIcon } from "@ionic/react";
import { withChangedTitle, withChat } from "../../context";
import { withRouter } from "react-router";
import moment from "moment";

const MessageBox = ({ me, message }) => {
    return (
        <section className={`message-box-container ${me ? "me" : "you"}`}>
            <header>
                {message.fromName} {me ? "(Me)" : ""}
            </header>
            <article>
                {message.message}
            </article>
            <footer>
                {moment(message.createdAt).fromNow()}
            </footer>
        </section>
    );
}

class ChatPage extends Component {

    scrollLastRef = React.createRef();

    scrollToBottom = () => {
        this.scrollLastRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    componentDidMount() {
        if (this.props.user) {
            let { branch, academicYear } = this.props.match.params;
            this.props.getClassroomMessages({branch, academicYear});
        }
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        let { branch, academicYear } = this.props.match.params;
        let messages = this.props.chat[branch][academicYear] || [];
        return (
            <section className="chat-page">
                <section className="messages">
                    {
                        messages.map(message => {
                            return <MessageBox me={message.fromEmail === this.props.user.email} message={message} />;
                        })
                    }
                    <div ref={this.scrollLastRef}></div>
                </section>
                <section className="write-message">
                    <IonTextarea style={{ maxWidth: "80%", height: "40px", background: "white", borderRadius: "20px" }} placeholder="Type a message"></IonTextarea>
                    <IonButton style={{ marginLeft: "5px" }} color="dark" shape="round"><IonIcon name="send"></IonIcon></IonButton>
                </section>
            </section>
        )
    }
}


export default withRouter(withChat(withChangedTitle("Classroom Chat")(ChatPage)));