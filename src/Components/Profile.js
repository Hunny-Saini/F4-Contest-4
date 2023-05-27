import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        
        if (!user || !user.accessToken) {
          navigate('/signup');
        }
    }, [navigate, user]);

    const logoutUser = () => {
        
        localStorage.removeItem('user');
        
        navigate('/signup');
    };

    return(
        <div className="profile-container">
            <h2>Profile</h2>
            {user ? (
                    <div className="data-container">
                    <p>Full Name : {user.fullName}</p>
                    <p>Email : {user.email}</p>
                    <p>Password : {user.password}</p>   
                    </div>
                ) : (
                    <p>No user found</p>
                )
            }
            <button className="logout-btn" onClick={logoutUser}>Logout</button>
        </div>
    )
}

export default Profile;