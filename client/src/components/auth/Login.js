import React, { Component }  from 'react'
import TextField from './../shared/TextField';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return(
      <div className="login">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 m-auto align-self-center">
              <h1 className="display-6 text-center bg-primary text-light">Login</h1>
              <form onSubmit={this.onSubmit}>
                <div class></div>
                <TextField
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />

                <TextField
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <input type="submit" className="btn btn-primary btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;