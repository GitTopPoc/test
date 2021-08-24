import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import LandingPresentation from "./components/LandingPresentation/LandingPresentation";

function App() {
    return (
        <BrowserRouter>
                <Header/>
            <LandingPresentation/>
        </BrowserRouter>
    )
         ;
}
export default App;
