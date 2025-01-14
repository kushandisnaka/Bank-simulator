import React from 'react'
import "./Header.css"

function Header() {
    return(
        <>
        <img id='logo' src="src/assets/NeoBanker_logo.jpeg" alt="logo" />
        <div className='flex-container2'>
            <div><a className='headerFont' href="/home">Home</a></div>
            <div><a className='headerFont' href="/about">About us</a></div>
            <div><a className='headerFont' href="">Profile</a></div>
            <div><a className='headerFont' href="/login">Log out</a></div>

        </div>
        </>
    )  
}

export default Header