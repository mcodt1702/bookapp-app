import React, { Component } from "react";
import Context from "../../context";

export default class Venues extends Component {
  static contextType = Context;
  static defaultProps = {
    match: { params: { id: 0 } },
  };
  render() {
    let { venues } = this.context || [];

    const venueList = venues.map((item) => (
      <div key={item.id} className="venueList">
        <ul>
          <li>{item.name}</li>
          <li>{item.description}</li>
        </ul>
      </div>
    ));

    return (
      <section id="three">
        <h2> List Of Venues with space for you</h2>
        {venueList}
      </section>
    );
  }
}
