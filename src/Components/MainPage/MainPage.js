import React, { Component } from "react";

import UserReservations from "../UserReservations/UserReservations";
import OfferedBookings from "../OfferedBookings/OfferedBookings";
import Venues from "../Venues/Venues";
import Context from "../../context";

export default class MainPage extends Component {
  static contextType = Context;
  static defaultProps = {
    match: { params: { id: 0 } },
  };

  render() {
    const user = this.context.getUsersName();
    console.log(user);

    return (
      <div role="main">
        hello
        <UserReservations />
        <OfferedBookings />
        <Venues />
      </div>
    );
  }
}
