import Navigation from "./Components/Navigation";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import {Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<Signup />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            
        </div>
    )
}

export default App;