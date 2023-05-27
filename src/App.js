import Navigation from "./Components/Navigation";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import {Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <div>
                <Navigation />
            <Routes>
                <Route exact path="/" component={Signup} />
                <Route path="/signup" component={Signup} />
                <Route path="/profile" component={Profile} />
            </Routes>
            
        </div>
    )
}

export default App;