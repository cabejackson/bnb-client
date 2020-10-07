import React from 'react'
import "./Login.css";
// import config from "../../config";



export default function Login(props) {

    // fetch(`${config.API_ENDPOINT}/prompts/reveal-cards`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    return (
        <div>
            <form
                className="login-form-submission"
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("the LOGIN form has been submitted");
                    // handleSubmit(context.value);
                }}
            >
                <h2>Login to your account below!</h2>
                <label htmlFor='email'>Email:</label><br />
                <input name='email' type='email' required /><br />
                <label htmlFor='password'>Password:</label><br />
                <input name='password' type='password' required /><br />
                <button id='submit-login' type='submit'>LOGIN</button>
            </form>
        </div>
    )
}

