import React from "react";
import ApiContext from "../../ApiContext";
import "./TBRGame.css";
import NavButton from "../NavButton/NavButton";
import { Link } from "react-router-dom";

import ValidationError from "../../ValidationError";

// export default function TBRGame(props) -- maybe switch to this, ask abt the difference?
const TBRGame = () => {
  const validateTbrNumber = (tbrNumber) => {
    console.log("this is the tbr number user inputted:", tbrNumber);
    if (tbrNumber.length < 1)
      return "You need to read more than 0 books to play this game LOL!";
    if (tbrNumber.length > 5)
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
                    placeholder="e.g. 5"
                    // onChange={(e) => context.handleTbrNumberChange(e.target.value)}
                    required
                  />
                </label>
          books this month!
        </h3>
              {/* <ValidationError message={validateTbrNumber(context.noteNameValue)} /> */}

              <h3>Choose "X" cards!</h3>
              {/* {context.prompts.map(p => (<ul><li key={p.id}>{p.prompt_descr}</li><li><p>[this is placeholder for some cool card image 1]</p></li></ul>))} */}
              <p>[this is placeholder for some cool card image 1]</p>
              <p>[this is placeholder for some cool card image 2]</p>
              <p>[this is placeholder for some cool card image 3]</p>
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
