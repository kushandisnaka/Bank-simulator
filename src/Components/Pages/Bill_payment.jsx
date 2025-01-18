import React, {useState,useEffect} from 'react'
import "../Mychannel/background.css"
import Header from "../Mychannel/Header.jsx"
import "./Bill_payment.css"
import "./Logindiv.css"


function Bill_payment() {
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setDate(today);
    },[]);


    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handlePayClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return(
        <>
        <Header/>
        <div id='pay' className='wrapper'>
            <h1 style={{}}>Neo Banker</h1>
            <h3 style={{color:'white'}}>Recharge & Bill Payment</h3>

            <h4 className='heading'>From Account</h4>
            <div className='box'><input  type="text" required/></div>
            <h4 className='heading'>Bill Payee Category</h4>
            <div >
            <select
                value={category}
                onChange={handleCategoryChange}
                className='box' 
                required>
                
                <option value="" disabled selected>Select a category</option>
                <option value="electricity">Electricity</option>
                <option value="water bill">Water bill</option>
                <option value="telephone">Telephone</option>
                <option value="education">Education</option>
                <option value="Recharge">Recharge</option>
                <option value="other">Other bill payment</option>
            </select>
            </div>
            <h4 className='heading'>
            {category === 'Recharge'? 'Mobile Number' : 'Account number'}
            </h4>

            <div className='box'><input
                        type="text"
                        value={toAccount}
                        onChange={(e) => setToAccount(e.target.value)}
                        required
                    /></div>

            <h4 className='heading'>Amount</h4>
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
            <button className='button' id='paybutton' onClick={handlePayClick}>pay</button>



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
        
        
        </>
    );  
}

export default Bill_payment