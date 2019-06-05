import React, { Component } from "react";
import socketIOClient from "socket.io-client";

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:4442",
      usersOnline: 0
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
      console.log(arg)
      this.setState({
        response: true,
        usersOnline: arg.onlineUsers
      });
    });
  }
  render() {
    const { response } = this.state;
    return (
        <div>
          {response
              ? <p>
                Online Users: { this.state.usersOnline } 
              </p>
              : <h3>Chat is Offline</h3>}
        </div>
    );
  }
}