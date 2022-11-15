import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbarcomp from "./components/NavbarComp.jsx";
import WelcomePage from "./components/WelcomePage.jsx";
import About from "./components/About.jsx";
import LogIn from "./components/LogIn.jsx";
import GetJoke from "./components/GetJoke.jsx";
import {Alert} from "react-bootstrap";
import facade from "./apiFacade.js";
import Footer from "./components/Footer.jsx";
import Coctails from "./components/Coctails.jsx";
import SignUp from "./components/SignUp.jsx";

function App() {
    //usestates her
    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('It just works! ~Todd Howard');


    return (
        <BrowserRouter>
            <div className="container">
                <Navbarcomp/>
                <Routes>
                    <Route path="/" element={<WelcomePage/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="login" element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn}
                                                        setErrorMessage={setErrorMessage}/>}/>
                    <Route path="joke" element={facade.hasUserAccess('user', loggedIn) ?
                        <GetJoke setErrorMessage={setErrorMessage}/> : <h4>Get back to work you lazy dog!</h4>}/>
                    <Route path="coctails" element={<Coctails/>}/>
                    <Route path="/signUp" element={<SignUp/>}/>
                    <Route path="*" element={<h1 className="not-found">Page Not Found</h1>}/>
                </Routes>
                {/*<Alert variant="dark" style={{width: "42rem"}}>Status: {errorMessage}</Alert>*/}
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;