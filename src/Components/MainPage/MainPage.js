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
    let { user = [] } = this.context || [];
    const userName = user.name;
    console.log(userName);

    return (
      <div className="username">
        <h2>Hello {userName}</h2>
        <div role="main" className="main">
          <UserReservations />
          <OfferedBookings />
          <Venues />
        </div>
      </div>
    );
  }
}
