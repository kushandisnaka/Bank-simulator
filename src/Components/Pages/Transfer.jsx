import React, {useState,useEffect} from 'react'
import "../Mychannel/background.css"
import Header from "../Mychannel/Header.jsx"
import "./Bill_payment.css"
import "./Logindiv.css"


function Transfer() {
    //const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setDate(today);

        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.account) {
            setFromAccount(user.account);
        }
    },[]);


    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handlePayClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    
        const newPayment = {
            toAccount,
            amount,
            date,
            category:"Fund Transfer",
            
        };
    
    
        const existingSummaries = JSON.parse(localStorage.getItem("paymentSummaries")) || [];
    
        const updatedSummaries = [...existingSummaries, newPayment];
    
        localStorage.setItem("paymentSummaries", JSON.stringify(updatedSummaries));
    
    };
    return(
        <>
        
        <div className='background1'>
        <Header/>
        <div id='pay' className='wrapper' style={{marginLeft : "35%", marginTop : "40px"}}>
            <h1 id='NB'>Neo Banker</h1>
            <h3  id='NB'>Fund Transfer</h3>

            <h4 className='heading'>From Account</h4>

            <div className='box'><input 
             type="text" 
             value={fromAccount}
             readOnly
             required/>
             </div>
            
             <h4 className='heading'>
                    To Account
            </h4> 

            <div className='box'><input
                        type="text"
                        value={toAccount}
                        onChange={(e) => setToAccount(e.target.value)}
                        required
                    /></div>

            <h4 className='heading'>Transfer Amount</h4>
            <div className='box'> <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    /></div>

            <h4 className="heading">Date</h4>
                <div className="box">
                    <input
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                        required
                    />
                </div>
            <button className='button' id='paybutton' onClick={handlePayClick}>Transfer</button>



        </div>
        {}
        {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Payment Confirmation</h3>
                        <p><strong>To Account:</strong> {toAccount}</p>
                        <p><strong>Amount:</strong> {amount}</p>
                        <p><strong>Date:</strong> {date}</p>
                        <button onClick={handleCloseModal}>OK</button>
                    </div>
                </div>
            )}
        
        
        </div>
        </>
    );  
}

export default Transfer