import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import LandingPresentation from "./components/LandingPresentation/LandingPresentation";
import LandingUserInfo from "./components/LandingUserInfo/LandingUserInfo";
import LandingOwnerInfo from "./components/LandingOwnerInfo/LandingOwnerInfo";
import LandingDiscuss from "./components/LandingDiscuss/LandingDiscuss";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <LandingPresentation/>
            <LandingUserInfo/>
            <LandingOwnerInfo/>
            <LandingDiscuss/>
            <Footer/>
        </BrowserRouter>
    )
         ;
}
export default App;
