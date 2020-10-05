import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import NavButton from "../NavButton/NavButton";

const Landing = () => {
  return (
    <>
      <div>
        {/* <!-- <img src="photos/pinkish-books.jpg" alt="A filled bookshelf"><br> --> */}
        <p>[this is placeholder for some cool bookish image]</p>
        <button id="button-start-tbr-game">
          <NavButton
            tag={Link}
            to="/tbr-game"
            type="button"
            className="NavButton__go-to-game-button"
          >
            {/* <FontAwesomeIcon icon="plus" />
          <br /> */}
            START TBR GAME!
          </NavButton>
        </button>

        <p>
          How to get started: I'm baby photo booth deep v tote bag artisan
          polaroid!
        </p>
      </div>
    </>
  );
};

export default Landing;
