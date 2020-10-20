import React, { Component } from "react";

export default class OfferedBookings extends Component {
  render() {
    return (
      <section id="two">
        <h2>Events happening Today</h2>
        <br />
        List of events with availability
        <br />
        Event ONE has availability <button>Reserve a place</button>
        <br />
        Event TWO has availability <button>Reserve a place</button>
        <br />
        Event Three has availability <button>Reserve a place</button>
        <br />
      </section>
    );
  }
}
