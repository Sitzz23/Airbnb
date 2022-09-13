import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Sign from "./Sign";

export default function Signup({ issOpen, setIssOpen }) {
    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (issOpen
                    ? " transition-opacity opacity-100 duration-500 translate-y-0  "
                    : "translate-y-full transition-all duration-[0ms] delay-500 opacity-0   ")
            }
        >
            <section
                className={
                    " w-[40%] h-[80%]  rounded-2xl mx-auto -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 absolute bg-white shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (issOpen ? " translate-y-0 " : " translate-y-full ")
                }
            >
                <div
                    className=' w-fit absolute top-[11px] left-2 cursor-pointer p-2 rounded-full hover:bg-zinc-200 transition '
                    onClick={() => {
                        setIssOpen(false);
                    }}
                >
                    <XMarkIcon className='w-5' />
                </div>

                <article className='relative flex flex-col h-full'>
                    <header className=' font-med text-base border-b p-4 flex justify-center'>
                        Sign up or log in
                    </header>
                    <Sign />
                </article>
            </section>
            <section
                className=' w-screen h-full cursor-pointer '
                onClick={() => {
                    setIssOpen(false);
                }}
            ></section>
        </main>
    );
}
