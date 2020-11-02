import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Context from "../../context";
import TokenService from "../../Services/token-service";
import ticket from "../../images/ticket.jpg";

export default class Header extends Component {
  static contextType = Context;
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.props.history.push("/");
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <div className="restLogin">
          <Link to="/loginvenue">Promote your event</Link>{" "}
        </div>
      </div>
    );
  }

  render() {
    return (
      <header className="headerstyling">
        <div className="hambu">
          <Link id="hambu" to="/main">
            <img src={ticket} alt="ticket" />
          </Link>
        </div>
        <Link className="logo" to="/">
          <h1>BookApp</h1>
        </Link>
        <div className="nav">
          <div className="restlogin">
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </div>
        </div>
      </header>
    );
  }
}
