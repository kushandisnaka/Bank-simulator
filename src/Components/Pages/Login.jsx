import React from 'react'
import "./Login.css"
import "./Loginbackground.css"
import "./Logindiv.css"
import "../Mychannel/button.css"
import { Link, useAsyncError } from "react-router"
import { useState } from 'react'
import { useNavigate } from 'react-router'

function Login() {

    const navigate = useNavigate();

    const [creds, setCred] = useState({email: "", password: "" });

    const onCredChange = (key, value) => {
        const current = {...creds};
        current[key] = value;
        setCred(current);
    }

    const handleLogin = async () => {
        const res = await fetch('http://localhost:3000/login', {method: "POST", body:JSON.stringify(creds), headers:{'Content-Type': "application/json"}});
        if (res.ok) {
            const data = await res.json();
            localStorage.setItem('user', JSON.stringify(data));
            navigate("/home");
        } else {
            alert("incorrect username or password");
        }
    }

    return(
        <div className='background'>
            <div id="top" className='wrapper'>
                <h1>Login</h1>
                <div id='username'><input  type="text" placeholder='Email' required value={creds.email} onChange={(e) => onCredChange('email', e.currentTarget.value)}/></div>
                <div id='username'><input   type="password" placeholder='Password' required value={creds.password} onChange={(e) => onCredChange('password', e.currentTarget.value)}/></div>
                <div>
                <label className='a' ><input type="checkbox" />Remember me</label>
                <a className='anchor' href="">Forgot password</a>
                </div>
                <button className='button' onClick={() => handleLogin()}>Login</button>

                <div>
                    <p className='a'>Don't have an account?<a className='anchor' href="/signup">Sign up</a></p>
                </div>
            
            </div>
        </div>
    )  
}

export default Login