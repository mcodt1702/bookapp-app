import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class LoginForm extends Component {
  state = { error: null };
  render() {
    const { error } = this.state;
    return (
      <section className="LoginPage">
        <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          {/* <p>
            Demo Customer - <br />
            username: joe@pizza.com <br />
            password: P@ssword1234
          </p> */}

          <div className="user_name">
            <label htmlFor="LoginForm__user_name">Email</label>
            <input required name="user_name" id="LoginForm__user_name"></input>
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
          <Link to="/main">
            {" "}
            <button>Login</button>
          </Link>
        </form>
      </section>
    );
  }
}
