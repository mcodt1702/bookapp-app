import React, { Component } from "react";

import UserReservations from "../UserReservations/UserReservations";
import OfferedBookings from "../OfferedBookings/OfferedBookings";
import Venues from "../Venues/Venues";
import Context from "../../context";
import "./MainPage.css";

export default class MainPage extends Component {
  static contextType = Context;
  static defaultProps = {
    match: { params: { id: 0 } },
  };

  render() {
    return (
      <div className="username">
        <div role="main" className="main">
          <UserReservations />
          <OfferedBookings />
          <Venues />
        </div>
      </div>
    );
  }
}
