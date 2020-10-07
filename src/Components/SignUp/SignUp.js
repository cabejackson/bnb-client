import React from 'react';
import "./SignUp.css";
import config from "../../config";

export default function SignUp(props) {


    // console.log(fetch(`${config.API_ENDPOINT}/prompts`))
    // fetch(`${config.API_ENDPOINT}/users/`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" }
    // }), 
    //     .then(res => res.json())
    //         .then(data => console.log(data))
    // handles the form submission
    // adds a new user to the sever (or to the db?)
    // should a message appeare on the page? - perhaps
    // const handleSignUpSubmission = (user) = {
    //     const userInput = { user_name: user };

    //     fetch(`some-endpoint`, { 
    //         method: "POST",
    //         headers: { "content-type": "application/json" }, 
    //         body: JSON.stringyfy(userInput)
    //     })
    //     .then((res) => {
    //         res.json
    //     })
    //     .catch((error) => {
    //         console.log(error.message)
    //     })
    // }

    // };


    return (
        <div>
            <form
                className="signup-form-submission"
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("the SIGN-UP form has been submitted");
                    // handleSignUpSubmission(context.value);
                }}>
                <h2>Fill out the form below to sign-up for an account</h2>
                <label htmlFor='firstName'>First Name:</label><br />
                <input name='firstName' type='text' required /><br />
                <label htmlFor='lastName'>Last Name:</label><br />
                <input name='lastName' type='text' required /><br />
                <label htmlFor='email'>Email:</label><br />
                <input name='email' type='email' required /><br />
                <label htmlFor='password'>Password:</label><br />
                <input name='password' type='password' required /><br />
                <button id='submit-sign-up' type='submit'>CREATE ACCOUNT</button>
            </form>
        </div>
    )
}




