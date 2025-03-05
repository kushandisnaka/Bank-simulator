import React from 'react'
import "./Loginbackground.css"
import "./About.css"
import "./Bill_payment.css"
import Header from "../Mychannel/Header"


function About() {
    return(
        <>
        <div   className='background1' >
        <Header/>
        <div className='top' style={{position: 'fix' }} >
        <h1 style={{textAlign: "center", color: "white"}} >About Us</h1>
        <h2 className='about-text'>Welcome to Neo Banker</h2>
        <p className='content'>At Neo Banker, we are dedicated to simplifying the way you manage your financial transactions and bill payments. 
            As a digital-first financial institution, we focus on creating a seamless, secure, and user-friendly banking experience designed to 
            fit your modern lifestyle. Whether you're an individual looking to streamline your finances or a business in need of efficient payment
             solutions, Neo Banker is here to meet your needs.Founded with a vision to make financial services more accessible, reliable, 
             and intuitive, Neo Banker was built around the idea of empowering people to take control of their financial journeys. We understand 
             the challenges of managing finances in today's fast-paced, ever-evolving world, and our goal is to bridge the gap with innovative, 
             tech-driven solutions tailored specifically to you.
             </p>
        <div className='flex-container5'>
            <div className='card'>
                <h2 className='about-text' style={{marginLeft:"-565px"}}>Our Mission</h2>
                <p className='content'>At Neo Banker, our mission is simple: to revolutionize the way people handle their money.
                     We provide a wide range of digital banking solutions that are designed to save you time, reduce stress, 
                     and enhance your financial health. Our services are secure, efficient, and always evolving to ensure that we 
                     can support you in all aspects of your financial life.
                </p>
            </div>
            <div className='card'>
            <h2 className='about-text'style={{marginLeft:"-565px"}} >Contact Us</h2>
            <p className='content'>+9411 2347811</p>
            <p  className='content'>infoneobanker@gmail.com</p>

            </div>
        </div>
        </div>
        </div>
        </>
    )  
}

export default About