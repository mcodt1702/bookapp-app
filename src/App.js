import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import SignUp from "./Components/SignUp/SignUp";
import LandingPage from "./Components/LandingPage/LandingPage";
import MainPage from "./Components/MainPage/MainPage";

class App extends Component {
  state = {
    a: [],
  };

  render() {
    return (
      <main className="App">
        <Route path={"/"} component={Header}></Route>
        <Route exact path={"/"} component={LandingPage}></Route>
        <Route exact path={"/signUp"} component={SignUp}></Route>
        <Route exact path={"/main"} component={MainPage}></Route>
      </main>
    );
  }
}

export default App;
