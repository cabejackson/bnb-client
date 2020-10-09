import React from "react";
import ApiContext from "../../ApiContext";
import "./TBRGame.css";
import NavButton from "../NavButton/NavButton";
import { Link } from "react-router-dom";

import ValidationError from "../../ValidationError";

// export default function TBRGame(props) -- maybe switch to this, ask abt the difference?
const TBRGame = () => {


  // handles the form submission
  // adds a new user to the sever (or to the db?)
  // should a message appeare on the page? - perhaps
  // const handleGameSubmission = (tbrNumber, cardsChosen) => {
  //   const userGameInput = { tbrNumber, cardsChosen };

  //   fetch(`${config.API_ENDPOINT}/users/`,
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(userGameInput)
  //     })
  //     .then((res) => res.json())
  //     .then((data) => console.log("this is data:", data))

  //     .catch((error) => {
  //       console.log(error.message)
  //     })
  // }


  const validateTbrNumber = (tbrNumber) => {
    console.log("this is the tbr number user inputted:", tbrNumber);
    if (tbrNumber < 1)
      return "You need to read more than 0 books to play this game LOL!";
    if (tbrNumber > 5)
      return "We only have 5 prompts so far, lol so read less books!";
  };
  // Shows an error if user has chosen the correct number of cards
  // const validateCardsChosen = (tbrNumber) => {
  //   console.log("this is the tbr number user inputted:", tbrNumber);
  //   if (tbrNumber.length < 1)
  //     return "You need to read more than 0 books to play this game LOL!";
  //   if (tbrNumber.length > 5)
  //     return "We only have 5 prompts so far, lol so read less books!";
  // };

  return (
    <ApiContext.Consumer>
      {context => {
        return (
          <div>
            {/* <!-- start of TBR Game Page -->

        <!-- header would go at the top of this page too, -->
        <!-- IF RETURNING USER: -->
        <!-- nav would include a logout button routing to landing page -->
        <!-- also, this header could say "welcome back . . ." -->
        <!-- IF NEW USER: -->
        <!-- nav would include a "sign-up" and "login" links routing to those pages -->
        <!-- also, this header could say "welcome  . . ." -->

        <!-- backside-of-card would eventually need to be 12 unique cards --> */}

            <form
              className="game-form-submission"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("the GAME form has been submitted");
                // handleSubmit(context.value);
              }}
            >
              <h3>
                I would like to read
          <label htmlFor="tbrNumber">
                  <input
                    type="text"
                    id="tbrNumber"
                    name="tbrNumber"
                    value={context.tbrNumber || ""}
                    placeholder="e.g. 5"
                    onChange={(e) => context.handleInputChange(e)}
                    required
                  />
                </label>
          books this month!
        </h3>
              <ValidationError message={validateTbrNumber(context.tbrNumber)} />

              {/* These should be an option */}
              <h3>Choose <code>{context.tbrNumber}</code> cards!</h3>
              {/* {context.prompts.map(p => (<ul><li key={p.id}>{p.prompt_descr}</li><li><p>[this is placeholder for some cool card image 1]</p></li></ul>))} */}
              <label htmlFor="prompt-1">
                <span>[this is placeholder for some cool card image 1]</span>
                <input
                  name="prompt-1"
                  id="prompt-1"
                  value={context.isSelected}
                  // onChange={(e) => context.handleInputChange(e)}
                  type="checkbox" />
              </label><br />

              <label htmlFor="prompt-2">
                <span>[this is placeholder for some cool card image 2]</span>
                <input
                  name="prompt-2"
                  id="prompt-2"
                  value={context.isSelected}
                  // onCheckBoxChange={}
                  // onChange={(e) => context.handleInputChange(e)}
                  type="checkbox" />
              </label><br />

              <label htmlFor="prompt-3">
                <span>[this is placeholder for some cool card image 3]</span>
                <input
                  name="prompt-3"
                  id="prompt-3"
                  value={context.isSelected}
                  // onCheckBoxChange={}
                  // onChange={(e) => context.handleInputChange(e)}
                  type="checkbox" />
              </label><br />

              <label htmlFor="prompt-4">
                <span>[this is placeholder for some cool card image 4]</span>
                <input
                  name="prompt-4"
                  id="prompt-4"
                  value={context.isSelected}
                  // onCheckBoxChange={}
                  // onChange={(e) => context.handleInputChange(e)}
                  type="checkbox" />
              </label><br />

              <label htmlFor="prompt-5">
                <span>[this is placeholder for some cool card image 5]</span>
                <input
                  name="prompt-5"
                  id="prompt-5"
                  value={context.isSelected}
                  // onCheckBoxChange={}
                  // onChange={(e) => context.handleInputChange(e)}
                  type="checkbox" />
              </label><br />
              {/* <ValidationError message={validateTbrNumber(context.noteNameValue)} /> */}

              <button type="submit" id="button-reveal-cards">
                Submit
        </button>
            </form>

            <NavButton
              tag={Link}
              to="/reveal-cards"
              type="button"
              className="NavButton__to-reveal-cards-button"
            >
              REVEAL CARDS!
      </NavButton>
          </div>)
      }}
    </ApiContext.Consumer>

  );
};

export default TBRGame;
