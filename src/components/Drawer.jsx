import React from "react";

export default function Drawer({ children, isOpen, setIsOpen }) {
    return (
        <div
            className={
                " fixed z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
        >
            <div
                className={
                    " w-screen max-w-xl bottom-0 absolute bg-white shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-y-0 " : " translate-y-full ")
                }
            >
                <article className='relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full'>
                    <header className='p-4 font-bold text-lg'>Header</header>
                    {children}
                </article>
            </div>
            <div
                className=' w-screen h-full cursor-pointer '
                onClick={() => {
                    setIsOpen(false);
                }}
            ></div>
        </div>
    );
}
