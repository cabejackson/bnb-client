import React, { Component } from "react";
import { Route } from "react-router-dom";
import ApiContext from "./ApiContext";
import config from "./config";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import TBRGame from "./components/TBRGame/TBRGame";
import RevealCards from "./components/RevealCards/RevealCards";
import ErrorBoundary from "./ErrorBoundary";
import SavedGames from "./components/SavedGames/SavedGames";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import About from "./components/About/About";

export default class App extends Component {
  state = {
    prompts: [],
    // value: "",
    first_name: "",
    last_name: "",
    user_name: "",
    email: "",
    password: "",
    tbrNumber: null,
    isSelected: false,
  }

  //Here's a DRY method of doing things,
  // Use this for the sign-up, login, and TBR game forms
  handleInputChange = (e) => {
    console.log("handle input change is running");
    // Here, e is the event.
    // e.target is our element.
    // All we need to do is to update the current state with the values here.
    this.setState({
      [e.target.name]: e.target.value
      //what is name? A: name is the attr inside the
      //what is value? A: whatever the user types inside the input
    });

    // handleCheckboxChange = changeEvent => {
    //   const { name } = changeEvent.target;

    //   this.setState(prevState => ({
    //     checkboxes: {
    //       ...prevState.checkboxes,
    //       [name]: !prevState.checkboxes[name]
    //     }
    //   }));
    // };



    // handleOptionChange = (e) => {
    //   console.log("handle option change is running");
    //   this.setState ({
    //     selectedOption: changeEvent.target.value
    //   })
    // }
  };

  handleNoteNameChange = (noteNameValue) => {
    console.log("handleNoteNameChange is working");
    this.setState({ noteNameValue });
  };

  componentDidMount = () => {
    console.log("api called")

    Promise.all([
      fetch(`${config.API_ENDPOINT}/prompts/reveal-cards`),

    ])
      .then(([promptsRes]) => {
        if (!promptsRes.ok) return promptsRes.json().then((e) => Promise.reject(e));

        return Promise.all([promptsRes.json()]);
      })
      .then(([prompts]) => {
        console.log('this is prompts in the .then', prompts);
        this.setState({ prompts });
      })
      .catch((error) => {
        console.error({ error });
      });

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
    const value = {
      prompts: this.state.prompts,
      // value: this.state.value,
      handleInputChange: this.handleInputChange,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      user_name: this.state.user_name,
      email: this.state.email,
      password: this.state.password,
      tbrNumber: this.state.tbrNumber,
      isSelected: this.state.isSelected


    }
    console.log('test', this.state.prompts);
    return (
      <ErrorBoundary>
        <ApiContext.Provider value={value}>
          <div className="App">
            {/* <nav className="App__nav"> {this.renderNavRoutes()} </nav> */}
            <header className="App__header">
              <Header />
            </header>
            <main className="App__main"> {this.renderMainRoutes()} </main>
          </div>
        </ApiContext.Provider>
      </ErrorBoundary>
    );
  }
}
