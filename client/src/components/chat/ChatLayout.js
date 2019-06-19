import React, { Component } from 'react';
import io from "socket.io-client";

import { USER_CONNECTED, LOGOUT } from './Events';
import LoginForm from './LoginForm';

const SOCKET_URL = 'http://localhost:4442';

export default class ChatLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: null
    }
  }

  componentWillMount() {
    this.initSocket();
  }

  initSocket = () => {
    const socket = io(SOCKET_URL);

    socket.on('connect', () => console.log("Connecting") )

    this.setState({ socket: socket });
  }

  setUser = (user) => {
    const { socket } = this.state;
    socket.emit(USER_CONNECTED, user);
    this.state({ user });
  }

  logout = () => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.state({ user: null });
  }

  render() {
    const { socket } = this.state
    return (
      <div>
        <LoginForm 
          socket={socket}
          setUser={this.setUser} 
        />
      </div>
    )
  }

}