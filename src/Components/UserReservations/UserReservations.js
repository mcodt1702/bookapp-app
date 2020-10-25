import React, { Component } from "react";
import OfferedBookings from "../OfferedBookings/OfferedBookings";
import Context from "../../context";
import TokenService from "../../Services/token-service";

export default class UserReservations extends Component {
  static contextType = Context;
  static defaultProps = {
    match: { params: { id: 0 } },
  };
  render() {
    const user = parseInt(TokenService.getUserId());
    let { bookings = [] } = this.context || [];

    console.log(user);

    const userReservations = bookings
      .filter((b) => b.users_id === user)
      .map((item) => (
        <ul>
          <li>
            {" "}
            {this.context.venues.find((v) => v.id === item.venue_id).name}
          </li>
          {new Date(item.booking_date).toDateString()}
        </ul>
      ));

    return (
      <section id="sec1">
        Upcoming Reservations
        {userReservations}
      </section>
    );
  }
}
