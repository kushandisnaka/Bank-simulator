import React from 'react'
import "./First.css"
import "./media.css"
import "./background.css"
function First() {
  return (
  <>
    <div className='background0'>
    <div className="flex-cotainer">
      
      <div className="card heading1">
          <h3>SAVE & MANAGE YOUR MONEY</h3>
          <h1 id="A">Banking</h1>
          <h1 id="A">You want</h1>
          <h1 id="A">to use</h1>
      </div>
      
    </div>
    <div className="top-right-buttons">
        <a id="button" href="/signup">Sign Up</a>
        <a id="button" href="/login">Login</a>
        
    </div>
    <img className='top-left' id='logo' src="src/assets/NeoBanker_logo.jpeg" alt="logo" />
    <h1 id='a' className="top-left">Neo Banker</h1>
    </div>

  </>
    
  )
}
export default First
