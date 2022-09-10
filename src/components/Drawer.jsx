import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Tabl from "./Tabl";

export default function Drawer({ isOpen, setIsOpen }) {
    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-y-0  "
                    : "translate-y-full transition-all duration-[0ms] delay-500 opacity-0   ")
            }
        >
            <section
                className={
                    " w-screen py-8 px-[5rem] h-[45%] bottom-0 rounded-t-2xl absolute bg-white shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-y-0 " : " translate-y-full ")
                }
            >
                <div
                    className=' w-fit absolute top-4 left-4 cursor-pointer p-2 rounded-full hover:bg-zinc-200 transition '
                    onClick={() => {
                        setIsOpen(false);
                    }}
                >
                    <XMarkIcon className='w-5' />
                </div>

                <article className='relative max-h-lg p-2 flex flex-col h-full'>
                    <header className=' font-medium text-base text-left border-b '>
                        <p className='py-2 border-b-2 w-fit border-black'>
                            Things to do
                        </p>
                    </header>
                    <Tabl />
                </article>
            </section>
            <section
                className=' w-screen h-full cursor-pointer '
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}
