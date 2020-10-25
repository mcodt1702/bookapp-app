import React, { Component } from "react";
import OfferedBookings from "../OfferedBookings/OfferedBookings";
import Context from "../../context";

export default class UserReservations extends Component {
  static contextType = Context;
  static defaultProps = {
    match: { params: { id: 0 } },
  };
  render() {
    console.log(this.context.currentUserId);

    //user res === users id

    return (
      <section id="sec1">
        Upcoming Reservations
        <br />
        Your reservation to event TWO at 00:00 hrs is confirmed.
        <br />
        Your reservation to event TWO at 00:00 hrs is confirmed.
      </section>
    );
  }
}
