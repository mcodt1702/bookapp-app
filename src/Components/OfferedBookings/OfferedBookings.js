import React, { Component } from "react";
import Context from "../../context";

export default class OfferedBookings extends Component {
  static contextType = Context;
  static defaultProps = {
    match: { params: { id: 0 } },
  };
  render() {
    let { bookings = [] } = this.context || [];

    var d = new Date();
    console.log(bookings);
    console.log(d);
    const bookingsList = bookings
      .filter((booking) => booking.users_id === null)
      .map((item) => (
        <div key={item.id} className="bookingsList">
          <ul>
            <li>{item.venue_id}</li>
            <li>{item.booking_date}</li>
            <button onClick={() => this.context.updateBooking(item.id)}>
              Book it!{" "}
            </button>
          </ul>
        </div>
      ));

    return (
      <section id="two">
        {<h2>Events happening Today</h2>}
        {bookingsList}
      </section>
    );
  }
}
