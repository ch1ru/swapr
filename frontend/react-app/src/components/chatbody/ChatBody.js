import React, { Component } from "react";
import ChatContent from "../chatcontent/ChatContent";
import ChatList from "../chatlist/ChatList";
import UserProfile from "../userprofile/UserProfile";
import "./ChatBody.css";

export default class ChatBody extends Component {
    render() {
        return <div className="main__chatbody">
            <ChatList />
            <ChatContent />
            <UserProfile />
        </div>
    }
}