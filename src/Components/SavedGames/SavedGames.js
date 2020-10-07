import React from 'react';
import "./SavedGames.css";
import { Link } from "react-router-dom";
import NavButton from "../NavButton/NavButton";
//page gives lots of errors due to table and <tr> tags

const SavedGames = () => {
    return (
        <div>
            <h3>
                Here’s a list of your saved games.
                <br>
                    You may edit the title or delete them.
                </br>
            </h3>
            {/* <!-- how do I show a list of tables? -->
            <!-- a bunch of ordered li tags maybe?--> */}
            <table >
                {/* <!--test out different widths--> */}
                <tr>
                    <th>SAVED TITLE</th>
                    <th>DATE OF GAME</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td>exampleTitle1</td>
                    <td>01/01/1970</td>
                    <td>✏️</td>
                    <td><span role="img">🗑</span></td>
                </tr>
                <tr>
                    <td>exampleTitle2</td>
                    <td>11/09/2016</td>
                    <td>✏️</td>
                    <td><span role="img">🗑</span></td>
                </tr>
            </table>
            <h3>You can start a new game by clicking the button below:</h3>
            <button id="button-restart-game">
                <NavButton
                    tag={Link}
                    to="/saved-games"
                    type="button"
                    className="NavButton__to-saved-games-button"
                >
                    {/* <FontAwesomeIcon icon="plus" /> <br /> */}
            START NEW GAME!
                </NavButton>
            </button>
        </div>
    )
}

export default SavedGames
