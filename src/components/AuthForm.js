import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  onEmailChange = (e) => this.setState({ email: e.target.value });
  onPasswordChange = (e) => this.setState({ password: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.onSubmit({email, password});
  };
  render() {
    const { errors } = this.props;
    return (
      <div className="row">
        <form className="col s6" onSubmit={this.onSubmit}>
          <div>
            <input
              id="mail"
              className="input-field"
              value={this.state.email}
              placeholder="Email"
              onChange={this.onEmailChange}
            />
          </div>
          <div>
            <input
              className="input-field"
              id="password"
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.onPasswordChange}
            />
          </div>
          <div className="errors" style={{color:"red"}}>
            {errors &&
              errors.map((err) => (
                <div className="errors" key={err}>
                  {err}
                </div>
              ))}
          </div>

          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
