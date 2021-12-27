import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";
import UserList from "./Components/UserList";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="users" element={<UserList />} />
                <Route path="/user/:id" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
