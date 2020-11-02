import React from "react";
import ReactDOM from "react-dom";
import OfferedBookings from "./OfferedBookings";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <OfferedBookings />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
