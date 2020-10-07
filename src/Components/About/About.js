import React from 'react';
import config from "../../config";


const About = () => {

    fetch(`${config.API_ENDPOINT}/prompts/reveal-cards`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => {
            console.error(error.message)
        })


    return (
        <>
            <h1>More About the Developer<br />
             & Getting Started on this App!</h1>

            <h2>Here's a list of card prompts:</h2>
        </>
    )
}

export default About
