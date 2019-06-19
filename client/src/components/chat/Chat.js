import React, { Component } from "react";
import socketIOClient from "socket.io-client";

import ListMessage from './ListMessage';

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:4442",
      usersOnline: 0,
      messages: []
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint,{
      reconnection: false,
      reconnectionDelay: 1000,
      reconnectionDelayMax : 5000,
      reconnectionAttempts: 99999
    });
    socket.on("onlineUsers", (arg) => {
      this.setState({
        response: true,
        usersOnline: arg.onlineUsers
      });
    });
    socket.on('msg', (arg) => {
      const allMessage = this.state.messages;
      allMessage.push(arg)
      this.setState.message(allMessage);
    });
  }
  render() {
    const msg = this.state.messages;
    return (
        <div>
          <ListMessage 
            msg={msg}
          />
        </div>
    );
  }
}