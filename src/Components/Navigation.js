import React from "react";
import { Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <p>Header</p>
            <div className="links-container">
                <div className="signup"><Link to="/">Signup</Link></div>
                <div className="profile"><Link to="/profile">Profile</Link></div>
            </div>
        </nav>
    )
}

export default Navigation;