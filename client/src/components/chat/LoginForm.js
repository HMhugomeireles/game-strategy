import React, { Component } from 'react'
import { VERIFY_USER } from './Events';

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      nickname: '',
      error: '' 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setError = this.setError.bind(this);
  }

  setUser({ user, isUser }) {
    if(isUser) {
      this.setError('User name taken');
    } else {
      this.props.setUser(user);
    }
  }

  setError(error) {
    this.setState.error(error);  
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    const { socket } = this.props;
    const { nickname } = this.state

    socket.emit(VERIFY_USER, nickname, this.setUser);
  }

  handleChange(e) {
    this.setState({ nickname: e.target.value });
  }

  render() {
    const { nickname, error } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h3>Nickname</h3>
          </label>
          <input 
            ref={(input) => this.textInput = input }
            type="text"
            id="nickname"
            value={nickname}
            onChange={this.handleChange}
            placeholder={'My nickname'}
          />
          <div>{ error }</div>
        </form>
      </div>
    )
  }
}
