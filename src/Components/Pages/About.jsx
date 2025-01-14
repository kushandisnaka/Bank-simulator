import React from 'react'
import "./Loginbackground.css"
import "./About.css"
import Header from "../Mychannel/Header"


function About() {
    return(
        <>

        <Header/>
        <div style={{position: 'fix'}} >
        <img className='about-image' src="src/assets/pexels-photo-5553924.webp" alt="About us" />
        <h1 style={{textAlign: "center"}} >About Us</h1>
        <h2 className='about-text'>Welcome to Neo Banker</h2>
        <p className='content'>At Neo Banker, we are dedicated to simplifying the way you manage your financial transactions and bill payments.Neo Banker was founded with a vision to make financial services more accessible, reliable, and user-friendly. We understand the challenges of managing finances in today’s fast-paced world, and we aim to bridge the gap with innovative solutions tailored to your needs.  </p>
        <div className='flex-container5'>
            <div className='card'>
                <h2 className='about-text'>Our Mission</h2>
                <p className='content'>To empower individuals and businesses by offering a secure, transparent, and efficient platform for financial transactions and bill payments.</p>
            </div>
            <div className='card'>
            <h2 className='about-text'>Contact Us</h2>
            <p className='content'>+9411 2347811</p>
            <p  className='content'>infoneobanker@gmail.com</p>

            </div>
        </div>
        </div>
        </>
    )  
}

export default About