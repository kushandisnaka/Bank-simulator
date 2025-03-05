import React, { useEffect, useState} from 'react'
import "./Loginbackground.css"
import Header from "../Mychannel/Header"
import "./Logindiv.css"
import "./Bill_payment.css"

function Summary(){
    const [paymentSummaries, setPaymentSummaries] = useState([]);

    useEffect(() => {
        const summaries = JSON.parse(localStorage.getItem("paymentSummaries")) || [];
        setPaymentSummaries(summaries);
    }, []);

    
    return(
        <>
        <div className='background1' style={{position:"absolute" ,height:"150vh"}} >
        <Header/>
        <h2 style={{textAlign:"center"}}>Payment Summary</h2>
        <div style={{marginLeft:"20%"}}>
                {paymentSummaries.length > 0 ? (
                    <ul>
                        {paymentSummaries.map((summary, index) => (
                            <li
                                key={index}
                                style={{
                                    marginBottom: "20px",
                                    paddingBottom: "10px",
                                    color: " beige",

                                }}
                            >
                                <p>
                                    <strong>To Account:</strong> {summary.toAccount}
                                </p>
                                <p>
                                    <strong>Amount:</strong> {summary.amount}
                                </p>
                                <p>
                                    <strong>Date:</strong> {summary.date}
                                </p>
                                <p>
                                    <strong>Category:</strong> {summary.category}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No payment details available.</p>
                )}
            </div>
           
        </div>
        </>
    );
}
export default Summary;
