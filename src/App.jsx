import React from "react";
import "./assets/styles/App.css";
import Navbar from "./Navbar";
import Tabs from "./components/Tabs";
import Footer from "./Footer";
import Drawer from "./components/Drawer";
//import Pagination from "./components/Pagination";
import Carousel from "./components/Carousel";
import Body from "./components/Body";

function App() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <div className=' w-screen fixed top-0 bg-white border-b border-zinc-200 z-10'>
                <Navbar setIsOpen={setIsOpen} />
            </div>

            <div className='fixed -translate-x-1/2 left-1/2 top-[14px]'>
                <Tabs />
            </div>
            {/* <div className=' mt-4 text-right'>
                <Pagination />
            </div> */}

            <div className='px-[7rem] pt-3 sticky top-[76px] bg-white'>
                <Carousel />
            </div>
            <div className=' mt-[90px]'>
                <Body />
            </div>

            <div className='fixed -translate-x-1/2 left-1/2 bottom-0 bg-white'>
                <Footer setIsOpen={setIsOpen} />
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default App;
