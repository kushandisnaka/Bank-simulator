import React from 'react'
import "./Login.css"
import "./Loginbackground.css"
import "./Logindiv.css"
import "../Mychannel/button.css"

function Login() {
    return(
        <div className='background'>
            <div id="top" className='wrapper'>
                <h1>Login</h1>
                <div id='username'><input  type="text" placeholder='Email' required/></div>
                <div id='username'><input   type="password" placeholder='Password' required/></div>
                <div>
                <label className='a' ><input type="checkbox" />Remember me</label>
                <a className='anchor' href="">Forgot password</a>
                </div>
                <button className='button'  type='submit'><a className='anchor' href="/home">Login</a></button>
                <div>
                    <p className='a'>Don't have an account?<a className='anchor' href="/signup">Sign up</a></p>
                </div>
            
            </div>
        </div>
    )  
}

export default Login