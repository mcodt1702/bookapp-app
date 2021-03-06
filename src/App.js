import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import SignUp from "./Components/SignUp/SignUp";
import LandingPage from "./Components/LandingPage/LandingPage";
import MainPage from "./Components/MainPage/MainPage";
import Context from "./context";
import PrivateRoute from "./Utilities/PrivateRoute";
import Login from "./Components/LogIn/LogIn";
import Config from "./config";
import TokenService from "./Services/token-service";
const { API_ENDPOINT } = Config;
class App extends Component {
  state = {
    venues: [],
    bookings: [],
    users: [],
    user: {},

    getUsersName: (user_id) => {
      fetch(`${API_ENDPOINT}/users/name`, {
        method: "get",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("There was a problem ");
          }

          return res.json();
        })
        .then((user) => {
          this.setState({ user });
        })
        .catch((err) => {
          alert(
            "There was a problem coneectig to the server. We can't get your name"
          );
        });
    },
    handleLoginSuccess: (user_id) => {
      window.location.replace("./main");
    },

    createUser: (e) => {
      e.preventDefault();

      let newUser = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };

      fetch(
        `${API_ENDPOINT}/users`,

        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(
              "There was a problem coneectig to the server. We can't create a new Order"
            ); // throw an error
          }

          return res.json();
        })
        .then((newUser) => {
          this.setState(
            {
              users: [...this.state.users, newUser],
            },
            () => {
              window.location.replace("/login");
            }
          );
        });
    },

    updateBooking: (id2, cancel = false) => {
      let updatedBooking = {
        id: id2,
      };

      let url = cancel ? "/bookings/cancel" : "/bookings";

      fetch(`${API_ENDPOINT}${url}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(updatedBooking),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(
              "There was a problem coneectig to the server. We can't save your booking"
            );
          }

          return res.json();
        })
        .then(() => {
          fetch(`${API_ENDPOINT}/bookings`)
            .then((res) => {
              if (!res.ok) {
                throw new Error("Something went wrong"); // throw an error
              }
              return res;
            })
            .then((res) => res.json())
            .then((bookings) => this.setState({ bookings }));
        })

        .catch((err) => {
          alert(
            "There was a problem coneectig to the server.  We can't save your booking",
            err
          );
        });
    },
  };

  componentDidMount() {
    fetch(`${API_ENDPOINT}/venues`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res;
      })
      .then((res) => res.json())
      .then((venues) => this.setState({ venues }))
      .catch((err) => {
        alert(
          "There was a problem connectig to the server getting venues.",
          err
        );
      });

    fetch(`${API_ENDPOINT}/bookings`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong"); // throw an error
        }
        return res;
      })
      .then((res) => res.json())
      .then((bookings) => this.setState({ bookings }))
      .catch((err) => {
        alert(
          "There was a problem connectig to the server on startup getting bookings.",
          err
        );
      });

    if (TokenService.hasAuthToken()) {
      this.state.getUsersName();
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <main className="App">
          <Route path={"/"} component={Header}></Route>
          <Route exact path={"/"} component={LandingPage}></Route>
          <Route exact path={"/signUp"} component={SignUp}></Route>
          <Route exact path={"/login"} component={Login}></Route>
          <Route exact path={"/loginvenue"} component={Login}></Route>
          <PrivateRoute
            exact
            path={"/main"}
            component={MainPage}
          ></PrivateRoute>
        </main>
      </Context.Provider>
    );
  }
}

export default App;
