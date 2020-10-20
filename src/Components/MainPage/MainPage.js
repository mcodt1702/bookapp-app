import React, { Component } from "react";

import UserReservations from "../UserReservations/UserReservations";
import OfferedBookings from "../OfferedBookings/OfferedBookings";
import Venues from "../Venues/Venues";

export default class MainPage extends Component {
  render() {
    return (
      <div role="main">
        <UserReservations />
        <OfferedBookings />
        <Venues />
      </div>
    );
  }
}
