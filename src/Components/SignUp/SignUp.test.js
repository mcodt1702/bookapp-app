import React from "react";
import ReactDOM from "react-dom";
import SingUp from "./SignUp";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <SingUp />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
