import React from "react";
import Logo from "./assets/icons/logo.svg";
import Globe from "./assets/svg/globe.svg";
import Log from "./components/Log";
import Signup from "./components/Signup";

function Navbar({ setIsOpen }) {
     const [issOpen, setIssOpen] = React.useState(false);
    return (
        <div className='md:py-4 flex justify-between text-[rgb(40,40,40)]  px-[5rem] '>
            <div className='flex gap-1'>
                <img src={Logo} width='40px' />
                <div className='font-logo text-[#ff395d] text-2xl self-center'>
                    <a href='/'>windbnb</a>
                </div>
            </div>

            <div className='flex gap-1'>
                <span className=' font-medium text-sm p-3 hover:bg-zinc-100 transition rounded-full'>
                    <a href='https://www.airbnb.co.in/host/homes'>
                        Become a host
                    </a>
                </span>
                <div
                    className='p-3 hover:bg-zinc-100 transition rounded-full cursor-pointer'
                    onClick={() => setIsOpen(true)}
                >
                    <img src={Globe} width='18px' />
                </div>
                <div className='ml-3 '>
                    <Log setIssOpen={setIssOpen} />
                </div>
            </div>
            <Signup issOpen={issOpen} setIssOpen={setIssOpen} />
        </div>
    );
}

export default Navbar;
