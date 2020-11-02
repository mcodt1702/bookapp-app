import React, { Component } from "react";
import Login from "../LogIn/LogIn";
import { Link } from "react-router-dom";

import "./LandingPage.css";
export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <h3>
          BookApp is an app that allows the user to reserve a place in an event.
          New Covid Social distancing guidelines require that open spaces have a
          reduced capacity. The bookApp helps venues and customers plan for
          visits and make sure they can attend the events they like.
        </h3>
        <div className="salutation">
          <h2>I have an account</h2>
          email: test@yahoo.com <br></br> password: P@assword!
          <Login></Login>
          <Link to="/signUp">
            <h2>SignUp</h2>
          </Link>
        </div>
      </div>
    );
  }
}
