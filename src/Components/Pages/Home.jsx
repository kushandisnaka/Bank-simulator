import React from 'react'
import "../Mychannel/background.css"
import "./Home.css"
import Header from "../Mychannel/Header.jsx" 

function Home() {
    return(
           
        
        <div className='flex-container1'>
            <Header/>
            <div className='card1'>
                <h1>Deposite Money</h1>
                <img className='deposite' src="src/assets/pexels-photo-6328942.jpeg" alt="Go to Deposite money" />
                <br />
                <button className='button' id='button1' type='submit'>Deposite</button>
                
                

            </div>
            <div className='card1'>
            <h1>Transfer Money</h1>
                <img className='deposite' src="src/assets/pexels-photo-11952303.webp" alt="Go to Deposite money" />
                <br />
                <button className='button' id='button1' type='submit'>Transfer</button>
                

            </div>
        
                
            

        </div>
    )  
}

export default Home