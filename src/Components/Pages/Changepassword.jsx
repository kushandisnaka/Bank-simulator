import React from 'react'
import Header from "../Mychannel/Header"
import "../Mychannel/background.css"
import "./Changepassword.css"
import "./Bill_payment.css"

function Changepassword(){
    return(
        <>
        <div className='background1'>
        <Header/>
        <div className='wrapper' id='changePosition'> 
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
        </div>

        </>
    )

}
export default Changepassword