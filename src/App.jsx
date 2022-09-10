import React from "react";
import "./assets/styles/App.css";
import Navbar from "./Navbar";
import Tabs from "./components/Tabs";

function App() {
    return (
        <div>
            <Navbar />
            <div className='fixed -translate-x-1/2 left-1/2 top-[14px]'>
                <Tabs />
            </div>
        </div>
    );
}

export default App;
