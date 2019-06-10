import React, { Component } from 'react'
import { SideBarGrid } from '../styles/styles';

import ChatLayout from './../chat/ChatLayout';

export default class Canvas extends Component {

  render() {
    return (
      <SideBarGrid>
        <ChatLayout />
      </SideBarGrid>
    )
  }
}