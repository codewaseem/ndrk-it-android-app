import React, { Component } from "react";
import "./style.css";
import { IonButton, IonTextarea, IonIcon } from "@ionic/react";
import { withChangedTitle, withChat } from "../../context";
import { withRouter } from "react-router";
import moment from "moment";
import { playSound } from "../../helpers";

moment.updateLocale('en', {
    relativeTime : {
        past: function(input) {
          return input === 'just now'
            ? input
            : input + ' ago'
        },
        s  : 'just now',
        future: "in %s",
        ss : '%d seconds',
        m:  "a minute",
        mm: "%d minutes",
        h:  "an hour",
        hh: "%d hours",
        d:  "a day",
        dd: "%d days",
        M:  "a month",
        MM: "%d months",
        y:  "a year",
        yy: "%d years"
    }
});

const MessageBox = ({ me, message, ...props }) => {
    return (
        <section className={`message-box-container ${me ? "me" : "you"}`} {...props}>
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

const TempMessageBox = (props) => {
    return (
        <MessageBox me={true} key={"tempDisplayMessage"} style={{ opacity: 0.5 }} {...props} />
    )
};

class ChatPage extends Component {

    scrollLastRef = React.createRef();

    state = {
        message: "",
        tempDisplayMessage: null
    }

    startChatSync = async () => {
        let {branch, academicYear} = this.props.match.params;
        this.chatSyncId = setInterval(() => {
            this.props.getClassroomMessages({branch,  academicYear});
        }, 60 * 1000);
        this.props.subscribeToNewMessages({branch, academicYear}, () => {
            playSound();
        });
    }

    stopChatSync = () => {
        clearInterval(this.chatSyncId);
        this.props.unsubscribe();
    }

    handleSendButtonClick = async () => {

        if (!this.state.message) {
            return;
        }

        let newMessage = this.state.message;

        this.setState(() => {
            return {
                tempDisplayMessage: {
                    fromName: this.props.user.name,
                    createdAt: new Date(),
                    message: newMessage
                },
                message: ""
            }
        });

        let { branch, academicYear } = this.props.match.params;

        try {
            let done = await this.props.postMessage({
                message: newMessage,
                branch,
                academicYear
            });

            if (done) {
                this.setState(() => {
                    return {
                        message: "",
                        tempDisplayMessage: null
                    }
                });
            }

        } catch (e) {

            console.log(e);
            this.setState(() => {
                return {
                    message: "",
                    tempDisplayMessage: null
                }
            });
        }
    }


    scrollToBottom = () => {
        this.scrollLastRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    componentDidMount() {
        if (this.props.user) {
            let { branch, academicYear } = this.props.match.params;
            this.props.getClassroomMessages({ branch, academicYear });
        }
        this.scrollToBottom();
        this.startChatSync();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    componentWillUnmount(){
        this.stopChatSync();
    }
    
    onChangeHandler = (e) => {


        let { name, value } = e.target;

        this.setState(() => {
            return {
                [name]: value
            }
        });
    }

    render() {
        let { branch, academicYear } = this.props.match.params;
        let messages = this.props.chat[branch][academicYear] || [];
        return (
            <section className="chat-page">
                <section className="messages">
                    {
                        messages.map(message => {
                            return <MessageBox key={new Date(message.createdAt).getTime()} me={message.fromEmail === this.props.user.email} message={message} />;
                        })
                    }
                    {this.state.tempDisplayMessage && <TempMessageBox message={this.state.tempDisplayMessage} />}
                    <div ref={this.scrollLastRef}></div>
                </section>
                <section className="write-message">
                    <IonTextarea name="message" onIonChange={this.onChangeHandler} value={this.state.message} style={{ maxWidth: "80%", height: "40px", background: "white", borderRadius: "20px" }} placeholder="Type a message"></IonTextarea>
                    <IonButton onClick={this.handleSendButtonClick} style={{ marginLeft: "5px" }} color="dark" shape="round"><IonIcon name="send"></IonIcon></IonButton>
                </section>
            </section>
        )
    }
}


export default withRouter(withChat(withChangedTitle("Classroom Chat")(ChatPage)));