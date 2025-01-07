import React from 'react'
import "./Loginbackground.css"
import "./Signup.css"
import "./Logindiv.css"
import "../Mychannel/button.css"


function Signup() {
    return(
        <div className='background'>
            <div className='wrapper'>
            <h1>Sign Up</h1>
                <div id='username'><input  type="text" placeholder='Email Address' required/></div>
                <div id='username'><input   type="password" placeholder='Password' required/></div>
                <div id='username'><input   type="password" placeholder='Confirm Password' required/></div>
                <div id='username'><input   type="text" placeholder='Account Number' required/></div>
                <div id='username'><input   type="text" placeholder='Bank name' required/></div>
                <button className='button'  type='submit'><a className='anchor' href="/login">Sign Up</a></button>
                <p className='a'>Already have an account?<a className='anchor' href="/login">Login</a></p>

            </div>

        </div>
    )  
}

export default Signup