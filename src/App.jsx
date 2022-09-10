import React from "react";
import "./assets/styles/App.css";
import Navbar from "./Navbar";
import Tabs from "./components/Tabs";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <Navbar />
            <div className='fixed -translate-x-1/2 left-1/2 top-[14px]'>
                <Tabs />
            </div>
            <div className='fixed -translate-x-1/2 left-1/2 bottom-0'>
                <Footer />
            </div>
        </div>
    );
}

export default App;
