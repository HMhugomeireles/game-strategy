import React from 'react';

import { ChatRow } from '../styles/styles';

const MessageRow = props => (
  <ChatRow>
    <span>
      <img src={props.avatar} alt="User avatar" />
      {props.nick}
    </span>
    <div>{props.message}</div>
  </ChatRow>
);

export default MessageRow;