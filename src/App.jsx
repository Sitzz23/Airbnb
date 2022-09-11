import React from "react";
import "./assets/styles/App.css";
import Navbar from "./Navbar";
import Tabs from "./components/Tabs";
import Footer from "./Footer";
import Drawer from "./components/Drawer";
import Pagination from "./components/Pagination";

function App() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <div className=' w-screen'>
                <Navbar setIsOpen={setIsOpen} />
            </div>

            <div className='fixed -translate-x-1/2 left-1/2 top-[14px]'>
                <Tabs />
            </div>
            <div className=' mt-4 text-right'>
                <Pagination />
            </div>

            <div className='fixed -translate-x-1/2 left-1/2 bottom-0'>
                <Footer setIsOpen={setIsOpen} />
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                Hemlo
            </Drawer>
        </div>
    );
}

export default App;
