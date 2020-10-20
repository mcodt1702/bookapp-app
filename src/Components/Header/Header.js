import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="headerstyling">
        <div className="hambu">
          <Link id="hambu" to="/food">
            &#9776;
          </Link>
        </div>

        <Link className="logo" to="/">
          BookApp
        </Link>
      </header>
    );
  }
}
