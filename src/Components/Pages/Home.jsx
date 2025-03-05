import React from 'react'
import "../Mychannel/background.css"
import "./Home.css"
import Header from "../Mychannel/Header.jsx" 
import {Link} from "react-router"

function Home() {
    return(
        <>
        <div className='background2'>
        <Header/>
        <div className='flex-container1' >
            <div className='card1' id='margin1'>
                <h2>Bill Payment</h2>
                <img  className='deposite'  src="src/assets/pexels-photo-6328942.jpeg" alt="Bill payment" />
                <br />
                <Link to="/bill_payment">
                    <button  id='button1'>Bill payment</button>
                </Link>               
            </div>

            <div className='card1'>
            <h2>Transfer Money</h2>
                <img className='deposite'  src="src/assets/pexels-photo-11952303.webp" alt="Money transaction" />
                <br />
                <Link to="/transfer">
                    <button  id='button1'>Transfer Money</button>
                </Link>
            </div>
            <div className='card1' id='margin2'>
                <h2>Account Summary</h2>
                <img className='deposite' src="src/assets/pexels-photo-5466810.jpeg" alt="Account summary" />
                <br />
                <Link to="/summary">
                    <button  id='button1'>Ac.Summary</button>
                </Link>

            </div>
            
        
                
            

        </div>
        </div>
        
        </> 
    )  
}

export default Home