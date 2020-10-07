import React from "react";
import ApiContext from "../../ApiContext";
import { Link } from "react-router-dom";
import NavButton from "../NavButton/NavButton";

const RevealCards = () => {
  return (
    <ApiContext.Consumer>
      {context => {
        return (<div>
          <h3>Here’s your reading prompts!</h3>
          {context.prompts.map(p => (
            <ul key={p.id}>
              <p key="card-img">[this is placeholder for some cool card image 1]</p>
              <li key={p.id}>{p.prompt_descr}</li>
            </ul>
          ))}

          {/* <ul>
            <li>
              <p>[this is placeholder for some cool card image 1]</p>
              <p>
                READING PROMPT/CHALLENGE: authentic readymade chillwave snackwave{" "}
              </p>
            </li>
            <li>
              <p>[this is placeholder for some cool card image 2]</p>
              <p>
                READING PROMPT/CHALLENGE: unicorn dollar toast readymade crucifix
          </p>
            </li>
            <li>
              <p>[this is placeholder for some cool card image 3]</p>
              <p>
                READING PROMPT/CHALLENGE: trust fund chambray, cliche brunch next
          </p>
            </li>
          </ul> */}

          <button id="button-saved-games">
            <NavButton
              tag={Link}
              to="/saved-games"
              type="button"
              className="NavButton__saved-game-button"
            >
              {/* <FontAwesomeIcon icon="plus" />
          <br /> */}
          SAVE GAME!
        </NavButton>
          </button>
        </div>)
      }}
    </ApiContext.Consumer>



  );
};

export default RevealCards;
