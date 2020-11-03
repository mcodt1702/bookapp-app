import React, { Component } from "react";
import ValidationError from "../../Utilities/ValidationError";
import context from "../../context";
import { Button, Input } from "../../Utilities/utilities";
import "./SignUp.css";

export default class SignUp extends Component {
  static contextType = context;
  constructor() {
    super();

    this.state = {
      name: { value: "", touched: false },

      email: { value: "", touched: false },

      password: { value: "", touched: false },
    };
  }

  nameUpdate(name) {
    this.setState({ name: { value: name, touched: true } });
  }
  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 4) {
      return "You need at least 3 characters";
    }
  }
  emailUpdate(email) {
    this.setState({ email: { value: email, touched: true } });
  }
  validateEmail() {
    const email = this.state.email.value.trim();
    if (email.length === 0) {
      return "Email is required";
    } else if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return "You have entered an invalid email address!";
  }

  passwordUpdate(password) {
    this.setState({ password: { value: password, touched: true } });
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return "Password is required";
    } else if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
      return true;
    }
    return "Use a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter!";
  }

  render() {
    return (
      <section className="LoginPage2">
        {" "}
        <form
          onSubmit={(e) => this.context.createUser(e, this.props.history)}
          id="userform"
        >
          <div className="name">
            <label htmlFor="LoginForm__password">Name: </label>
            <Input
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.name.value}
              onChange={(e) => this.nameUpdate(e.target.value)}
              required
            ></Input>
            {this.state.name.touched && (
              <ValidationError message={this.validateName()} />
            )}
          </div>

          <div className="email">
            <label htmlFor="LoginForm__email">Email: </label>
            <Input
              name="email"
              type="text"
              placeholder="email@email.com"
              value={this.state.email.value}
              onChange={(e) => this.emailUpdate(e.target.value)}
              required
            ></Input>
            {this.state.email.touched && (
              <ValidationError message={this.validateEmail()} />
            )}
          </div>

          <div className="password">
            <label htmlFor="LoginForm__password">Password: </label>
            <Input
              name="password"
              type="password"
              placeholder="one numeric digit, uppercase and lowercase letters "
              value={this.state.password.value}
              onChange={(e) => this.passwordUpdate(e.target.value)}
              required
            ></Input>
            {this.state.password.touched && (
              <ValidationError message={this.validatePassword()} />
            )}
          </div>

          <Button type="submit" id="submit">
            Register
          </Button>
        </form>
      </section>
    );
  }
}
