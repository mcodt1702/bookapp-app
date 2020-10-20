import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class MainPage extends Component {
  render() {
    return (
      <div role="main">
        <section id="sec1">
          Upcoming Reservations
          <br />
          Your reservetion to event at 00:00 hrs is confirmed.
        </section>

        <section id="two">
          =====Today=====
          <br />
          List of events with availability <button>Reserve a place</button>
          <br />
        </section>

        <section id="three">
          List Of Venues with upcoming Events<button>Reserve a place</button>
          <br />
        </section>
      </div>
    );
  }
}
