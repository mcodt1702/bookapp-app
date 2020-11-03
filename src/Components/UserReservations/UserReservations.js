import React, { Component } from "react";
import "./UserReservations.css";
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

    const userReservations = bookings
      .filter((b) => b.users_id === user)
      .map((item) => (
        <div className="userReservations" key={item.id}>
          <ul>
            <li>
              {" "}
              {this.context.venues.find((v) => v.id === item.venue_id).name}
            </li>
            <li>{new Date(item.booking_date).toDateString()}</li>
            <button onClick={() => this.context.updateBooking(item.id, true)}>
              Cancel Reservation
            </button>
          </ul>
        </div>
      ));

    const noreservations =
      userReservations.length === 0 ? <h4>You have no reservations</h4> : "";

    return (
      <section id="sec1">
        <h2>Your reserved Events</h2>
        {userReservations}
        {noreservations}
      </section>
    );
  }
}
