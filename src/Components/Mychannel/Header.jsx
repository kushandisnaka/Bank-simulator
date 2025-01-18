import React, { useEffect, useState } from 'react'
import "./Header.css"
import { useLocation, useNavigate } from 'react-router';
import { getUser } from './utils'

function Header() {
    const [user, setUser] = useState(getUser());
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        setUser(getUser())
    }, [location])

    const handleLogOut = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    const handleDeleteAccount = async () => {
        if (user && user.id) {
            const confirmDelete = window.confirm("Are you sure you want to delete your account?");
            if (confirmDelete) {
                try {
                    const response = await fetch(`http://localhost:3000/delete/${user.id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    if (response.ok) {
                        alert("Account deleted successfully.");
                        localStorage.removeItem("user");
                        navigate("/signup"); // Redirect to signup or home page
                    } else {
                        const errorData = await response.json();
                        alert(`Error: ${errorData.message}`);
                    }
                } catch (error) {
                    console.error("Error deleting account:", error);
                    alert("An error occurred while deleting the account.");
                }
            }
        } else {
            alert("User not logged in.");
        }
    };


    return(
        <>
        <img id='logo' src="src/assets/NeoBanker_logo.jpeg" alt="logo" />
        <div className='flex-container2'>
            <div><a className='headerFont' href="/home">Home</a></div>
            <div><a className='headerFont' href="/about">About us</a></div>
            <div><a className='headerFont' href="">{user ? user.email: "Profile"}</a></div>
        <div class="dropdown-container">
            <a class="headerFont dropdown-header" href="">Settings</a>
            <div class="dropdown-menu">
                <a onClick={() => handleLogOut()} class="dropdown-item">Logout</a>
                <a onClick={handleDeleteAccount} class="dropdown-item" href="#">Delete Account</a>
                <a class="dropdown-item" href="">Change Password</a>
            </div>
        </div>

            

        </div>
        </>
    )  
}

export default Header