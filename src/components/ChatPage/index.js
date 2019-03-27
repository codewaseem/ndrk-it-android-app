import React, { Component } from "react";
import "./style.css";


const MessageBox = ({ me }) => {
    return (
        <section className={`message-box-container ${me ? "me" : "you"}`}>
            <header>
                Chandan H.M
            </header>
            <article>
                Message content goes here...
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
                <MessageBox />
                <MessageBox me/>
                <MessageBox />
                <MessageBox />
                <MessageBox />
                <MessageBox  me/>
                <MessageBox />
                <MessageBox />
                <MessageBox />
                <MessageBox />
                <MessageBox />
                <MessageBox />
                <MessageBox />
                <MessageBox />

            </section>
        )
    }
}


export default ChatPage;