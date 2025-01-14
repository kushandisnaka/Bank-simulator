import React from 'react'
import "./Loginbackground.css"
import "./Signup.css"
import "./Logindiv.css"
import "../Mychannel/button.css"
import { Link } from "react-router"


function Signup() {
    return(
        <div className='background'>
            <div className='wrapper'>
            <h1>Sign Up</h1>
                <div id='username'><input  type="text" placeholder='Email Address' required/></div>
                <div id='username'><input   type="password" placeholder='Password' required/></div>
                <div id='username'><input   type="password" placeholder='Confirm Password' required/></div>
                <div id='username'><input   type="text" placeholder='Account Number' required/></div>
                
                <div id='username'>
                    <select name="" id="">
                        <option value="">Select the Bank</option>
                        <option value="">Bank of ceylon</option>
                        <option value="">People's Bank</option>
                        <option value="">Sampath Bank</option>
                        <option value="">Commercial Bank</option>
                        <option value="">Hatton National Bank</option>
                        <option value="">National Savings Bank</option>

                    
                        
                    </select>
                </div>
                <Link to="/login">
                                    <button className='button'>Sign Up</button>
                
                                </Link>
                <p className='a'>Already have an account?<a className='anchor' href="/login">Login</a></p>

            </div>

        </div>
    )  
}

export default Signup