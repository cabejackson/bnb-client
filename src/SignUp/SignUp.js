import React from 'react';
import "./SignUp.css";


const SignUp = () => {
    return (
        <div>
            <form
                className="signup-form-submission"
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("the SIGN-UP form has been submitted");
                    // handleSubmit(context.value);
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

export default SignUp
