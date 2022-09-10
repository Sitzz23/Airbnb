import React from "react";
import Logo from "./assets/icons/logo.svg";
import Globe from "./assets/svg/globe.svg";
import Log from "./components/Log";

function Navbar() {
    return (
        <div className='md:py-4 flex justify-between text-[rgb(40,40,40)] border-b border-zinc-200 px-[5rem] '>
            <div className='flex gap-1'>
                <img src={Logo} width='40px' />
                <div className='font-logo text-[#ff395d] text-2xl self-center'>
                    <a href='/'>windbnb</a>
                </div>
            </div>

            <div className='flex gap-1'>
                <span className=' font-medium text-sm p-3 hover:bg-zinc-100 transition rounded-full'>
                    Become a host
                </span>
                <div className='p-3 hover:bg-zinc-100 transition rounded-full'>
                    <img src={Globe} width='18px' />
                </div>
                <div className='ml-3'>
                    <Log />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
