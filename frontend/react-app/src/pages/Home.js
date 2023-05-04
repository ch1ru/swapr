import React from "react";
import UserSidebar from "../components/UserSidebar";
import MessageWindow from "../components/messages/MessageWindow";
import "../styles/home.css";
import Nav from "../components/nav/Nav";
import ChatBody from "../components/chatbody/ChatBody";

export default function Home() {

    const users = [
        {"name": "john smith"},
        {"name": "max hill"},
        {"name": "jonny hill"},
        {"name": "john smith"},
        {"name": "max hill"},
        {"name": "jonny hill"},
        {"name": "john smith"},
        {"name": "max hill"},
        {"name": "jonny hill"},
        {"name": "john smith"},
        {"name": "max hill"},
        {"name": "jonny hill"}
    ];

    const messages = [
        {
            "content": "This is a message",
            "origin": "local"
        },
        {
            "content": "This is a message",
            "origin": "remote"
        },
        {
            "content": "This is a message",
            "origin": "local"
        }
    ]

    return (
        <>
            <ChatBody />
        </>
    )
  
}