import React from 'react'

import MessageRow from './MessageRow';

class Conversation extends React.Component {
  render() {
    const postPreviews = this.renderPostPreviews();

    return (
      <section>
        <div><h1>Chat</h1></div>
        <ul>
          { postPreviews }
        </ul>
      </section>
    );
  }

  renderPostPreviews() {
    return this.props.msg.map(post => this.renderMessage(post));
  }

  renderMessage(msg) {
    return (
      <MessageRow 
        avatar={msg.avatar}
        nick={msg.nick}
        message={msg.message}
      />
    );
  }
}

export default Conversation;
