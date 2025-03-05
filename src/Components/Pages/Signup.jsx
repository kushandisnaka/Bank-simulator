import React, { useState } from 'react'
import "./Loginbackground.css"
import "./Signup.css"
import "./Logindiv.css"
import "../Mychannel/button.css"
import { Link, UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from "react-router"

import { useNavigate } from 'react-router'


function Signup() {

    const navigate = useNavigate();

    const [creds, setCreds] = useState({
        email: "",
        password: "",
        password2: "",
        account: "",
        bank: ""
    });

    const onCredChange = (key, value) => {
        const current = {...creds};
        current[key] = value;
        setCreds(current);
    }

    const handleSignUp = async () => {
        if (creds.password != creds.password2) {
            alert("passwords does not match");
            return;
        }

        const {password2, ...regiterInfo} = creds;

        const res = await fetch('http://localhost:3000/register', {method: "POST", body:JSON.stringify(regiterInfo), headers:{'Content-Type': "application/json"}});
        if (res.ok) {
            navigate("/login");
        } else {
            alert("user already exists");
        }
    }

    return(
        <div className='background1'>
            <div className='wrapper' id='b'>
            <h2>Sign Up</h2>
                <div id='username'><input  type="text" placeholder='Email Address' required value={creds.email} onChange={(e) => onCredChange('email', e.currentTarget.value)}/></div>
                <div id='username'><input   type="password" placeholder='Password' required value={creds.password} onChange={(e) => onCredChange('password', e.currentTarget.value)}/></div>
                <div id='username'><input   type="password" placeholder='Confirm Password' required value={creds.password2} onChange={(e) => onCredChange('password2', e.currentTarget.value)}/></div>
                <div id='username'><input   type="text" placeholder='Account Number' required value={creds.account} onChange={(e) => onCredChange('account', e.currentTarget.value)}/></div>
                
                <div id='username'>
                    <select value={creds.bank} onChange={(e) => onCredChange('bank', e.currentTarget.value)}>
                        <option value="">Select the Bank</option>
                        <option value="BOC">Bank of ceylon</option>
                        <option value="PEOPLES">People's Bank</option>
                        <option value="SAMPATH">Sampath Bank</option>
                        <option value="COM">Commercial Bank</option>
                        <option value="HNB">Hatton National Bank</option>
                        <option value="NSB">National Savings Bank</option>

                    
                        
                    </select>
                </div>
                    <button className='button11' id='length' onClick={()=>handleSignUp()}>Sign Up</button>
                
                <p className='a'>Already have an account?<a className='anchor1' href="/login">Login</a></p>

            </div>

        </div>
    )  
}

export default Signup