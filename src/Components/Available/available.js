import React, { Component } from "react";
import Context from "../../context";

export default class Available extends Component {
  static contextType = Context;
  static defaultProps = {
    match: { params: { id: 0 } },
  };
  render() {
    let { bookings = [] } = this.context || [];
    const list = bookings
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
        {list}
        <b>{list.length ? "" : "This venue has no openings at this time"}</b>
      </div>
    );
  }
}
