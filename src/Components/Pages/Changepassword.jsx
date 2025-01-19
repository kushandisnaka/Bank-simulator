import React from 'react'
import Header from "../Mychannel/Header"
import "../Mychannel/background.css"
import "./Changepassword.css"

function Changepassword(){
    return(
        <>
        <Header/>
        <div className='wrapper'> 
        <div id='alighn'>
        <label htmlFor="oldpassword" className='space'>Old Password <span >*</span></label>
        <input className='box1' type="password"  />
        </div>
        <div id='alighn'>
        <label htmlFor="newpassword" className='space'>New Password <span >*</span></label>
        <input className='box1' type="password"  />
        </div>
        <div id='alighn'>
        <label htmlFor="oldpassword" className='space'>Re-enter New Password <span >*</span></label>
        <input  className='box1' type="password"  />
        </div>
        <button className='button1'> Change Password</button>

        </div>

        </>
    )

}
export default Changepassword