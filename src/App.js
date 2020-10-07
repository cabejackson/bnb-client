import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Landing from "./Landing/Landing";
import TBRGame from "./Components/TBRGame/TBRGame";
import RevealCards from "./Components/RevealCards/RevealCards";
import ErrorBoundary from "./ErrorBoundary";
import SavedGames from "./Components/SavedGames/SavedGames";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import About from "./Components/About/About";

export default class App extends Component {
  state = {

  }

  componentDidMount = () => {
    console.log("api called")

  }






  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={Landing} />
        <Route exact path="/tbr-game" component={TBRGame} />
        <Route exact path="/reveal-cards" component={RevealCards} />
        <Route exact path="/saved-games" component={SavedGames} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/about" component={About} />
      </>
    );
  }

  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          {/* <nav className="App__nav"> {this.renderNavRoutes()} </nav> */}
          <header className="App__header">
            <Header />
          </header>
          <main className="App__main"> {this.renderMainRoutes()} </main>
        </div>
      </ErrorBoundary>
    );
  }
}
