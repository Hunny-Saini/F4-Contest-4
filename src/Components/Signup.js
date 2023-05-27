import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    let [fullName,setFullName] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [cpassword,setCPassword] = useState("");
    let [error,setError] = useState("");
    let [success,setSuccess] = useState("");

    const signupUser = () => {
        if (!fullName || !email || !password || !cpassword) {
          setError('Error: All fields are mandatory');
          setSuccess('');
        } else if (password !== cpassword) {
          setError('Passwords do not match');
          setSuccess('');
        } else {
          const accessToken = Math.random().toString(36).substring(2, 18);
    
    
          const user = {
            fullName,
            email,
            password,
            accessToken,
          };
          localStorage.setItem('user', JSON.stringify(user));
    
    
          setFullName('');
          setEmail('');
          setPassword('');
          setCPassword('');
          setError('');
          setSuccess('successful Sign Up!');
    
    
          setTimeout(() => {
            navigate('/Profile');
          }, 1000);
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2>Signup</h2>
                <form>
                    <input type="text" value={fullName} placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} />
                    <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" value={cpassword} placeholder="Confirm Password" onChange={(e) => setCPassword(e.target.value)}/>
                </form>
                <div className="messages">
                    {error && <span className="error">{error}</span>}
                    {success && <span className="sucsess">{success}</span>}
                    <span className="pass-mismatch">Password mismatch</span>
                </div>
                <button type="submit" className="btn" onClick={signupUser}>Signup</button>
            </div>
        </div>
    )
}

export default Signup;