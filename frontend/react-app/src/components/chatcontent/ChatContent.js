import React, { Component, useState, createRef, useEffect } from "react";
import "./ChatContent.css";
import { axiosPublic } from "../../api/config.js"
import Avatar from "../chatlist/Avatar";
import ChatItem from "./ChatItem";
import { FaCog, FaPaperPlane, FaPlus } from "react-icons/fa";
var CryptoJS = require("crypto-js");

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  
  chatItms = [
    {
      key: 1,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {

    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
    this.scrollToBottom();
  };
  handleSendMessage = async () => {
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(this.state.msg), 'secret key 123').toString();
    // Decrypt
    //var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    //var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    if (this.state.msg != "") {
      this.chatItms.push({
        key: this.state.chat.length + 1,
        type: "",
        msg: this.state.msg,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      });

      let response = await axiosPublic.post(`nodeapi/chatgpt`, {message: this.state.msg});

      let htlc = await axiosPublic.post(`ldk/sendmessage`, {pubkey: "", amount: 100, message: this.state.msg});

      this.chatItms.push({
        key: this.state.chat.length + 1,
        type: "other",
        msg: response.data.data.reply,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      });
      
      this.setState({ chat: [...this.chatItms] });
      this.setState({ msg: "" });
      
    }
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
              />
              <p>Tim Hover</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i><FaCog /></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i><FaPlus /></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn" onClick={this.handleSendMessage}>
              <i><FaPaperPlane /></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}