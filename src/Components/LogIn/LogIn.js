import React, { Component } from "react";

import context from "../../context";
import AuthApiService from "../../Services/auth-api-service";
import TokenService from "../../Services/token-service";
export default class LoginForm extends Component {
  state = { error: null };

  static contextType = context;
  handleSubmitJwtAuth = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const { email, password } = e.target;

    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then((res) => {
        email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        TokenService.saveUserId(res.user_id);
        this.context.handleLoginSuccess(res.user_id);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <section className="LoginPage">
        <p>PLEAE LOG IN TO CONTINUE</p>
        <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          {/* <p>
            Demo Customer - <br />
            username: joe@pizza.com <br />
            password: P@ssword1234
          </p> */}

          <div className="email">
            <label htmlFor="LoginForm__email">Email</label>
            <input required name="email" id="LoginForm__email"></input>
          </div>
          <div className="password">
            <label htmlFor="LoginForm__password">Password</label>
            <input
              required
              name="password"
              type="password"
              id="LoginForm__password"
            ></input>
          </div>

          <button>Login</button>
        </form>
      </section>
    );
  }
}
