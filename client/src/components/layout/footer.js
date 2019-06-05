import React, { Component } from 'react'
import { FooterGrid } from '../styles/styles';

import Chat from './../chat/Chat';

export default class Footer extends Component {

  render() {
    return (
      <FooterGrid>
        <Chat />
      </FooterGrid>
    )
  }
}