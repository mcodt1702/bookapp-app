import React from "react";
import ReactDOM from "react-dom";
import UserReservations from "./UserReservations";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <UserReservations />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
