import React, { Component, useState, createRef, useEffect, useContext } from "react";
import "./ChatContent.css";
import { nodeClient, senseiClient } from '../../api/config'
import Avatar from "../chatlist/Avatar";
import ChatItem from "./ChatItem";
import { FaCog, FaCoins, FaPaperPlane, FaPlus } from "react-icons/fa";
var CryptoJS = require("crypto-js");

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  
  
  chatItms = [];

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
  handleSendMessage = async (e) => {
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

      let response = await nodeClient.post(`/chatgpt`, {message: this.state.msg});

      

      let pubkey = ""
      senseiClient.keysend(pubkey, 20).then((res) => {
        console.log("keysend successful")
      }).catch((err) => {
        console.log("could not keysend")
      })

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

  handleSendTip = async () => {
    alert("send tip");
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
            <button className="btnSendTip" id="sendTipBtn" onClick={this.handleSendMessage}>
              <i><FaCoins /></i>
            </button>
            <button className="btnSendMsg" id="sendMsgBtn" onClick={this.handleSendMessage}>
              <i><FaPaperPlane /></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}