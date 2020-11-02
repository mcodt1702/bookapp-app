import React, { Component } from "react";
import Context from "../../context";
import "./Venues.css";
import Available from "../Available/available";

export default class Venues extends Component {
  static contextType = Context;
  static defaultProps = {
    match: { params: { id: 0 } },
  };
  render() {
    let { venues = [] } = this.context || [];

    const venueList = venues.map((item) => (
      <div key={item.id} className="venueList">
        <ul>
          <li>
            <h2>{item.name}</h2>
          </li>
          <li>{item.description}</li>
          <Available id={item.id} />
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
