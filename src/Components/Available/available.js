import React, { Component } from "react";
import Context from "../../context";

export default class Available extends Component {
  static contextType = Context;
  static defaultProps = {
    match: { params: { id: 0 } },
  };
  render() {
    const list = this.context.bookings
      .filter((b) => b.venue_id === this.props.id && b.users_id === null)
      .map((each) => (
        <div key={each.id} className="vList">
          <ul>
            <li>{new Date(each.booking_date).toDateString()}</li>
            <button onClick={() => this.context.updateBooking(each.id)}>
              Book this day
            </button>
          </ul>
        </div>
      ));

    return (
      <div>
        <h1>hello there {this.props.id}</h1>
        {list}
        <b>{list.length ? "" : "There are no events available"}</b>
      </div>
    );
  }
}
