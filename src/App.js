import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import TBRGame from "./TBRGame/TBRGame";
import RevealCards from "./RevealCards/RevealCards";
import ErrorBoundary from "./ErrorBoundary";
import SavedGames from "./SavedGames/SavedGames";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

export default class App extends Component {
  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={Landing} />
        <Route exact path="/tbr-game" component={TBRGame} />
        <Route exact path="/reveal-cards" component={RevealCards} />
        <Route exact path="/saved-games" component={SavedGames} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
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
