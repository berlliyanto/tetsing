import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/404";
import AccountPage from "./pages/AccountPage";

function App(){
    return (
        <Router>
            <Routes>
                <Route path="*" element={<ErrorPage/>} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/account" element={<AccountPage/>} />
            </Routes>
        </Router>
    )
}

export default App;