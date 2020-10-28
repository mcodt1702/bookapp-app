import React, { Component } from "react";

import Context from "../../context";
import TokenService from "../../Services/token-service";

export default class UserReservations extends Component {
  static contextType = Context;
  static defaultProps = {
    match: { params: { id: 0 } },
  };
  render() {
    // const userName = this.context.getUsersName();
    // console.log(userName);

    const user = parseInt(TokenService.getUserId());
    let { bookings = [] } = this.context || [];

    const userReservations = bookings
      .filter((b) => b.users_id === user)
      .map((item) => (
        <div className="userReservations" key={item.id}>
          <ul>
            <li>
              {" "}
              {this.context.venues.find((v) => v.id === item.venue_id).name}
            </li>
            {new Date(item.booking_date).toDateString()}
          </ul>
          <button onClick={() => this.context.updateBooking(item.id, true)}>
            Cancel Reservation
          </button>
        </div>
      ));

    return (
      <section id="sec1">
        <h2>Upcoming Reservations</h2>
        {userReservations}
      </section>
    );
  }
}
