import React from "react";
import {
    Arctic,
    Beaches,
    Boats,
    Camp,
    Iconic,
    Islands,
    Lake,
    Luxe,
    Npark,
    Omg,
    Ski,
    Surf,
    Tropical,
    Views,
    Pools,
} from "../assets/icons";

function Pagination() {
    const tab = [
        { id: "1", img: Omg, name: "OMG!" },
        { id: "2", img: Beaches, name: "Beaches" },
        { id: "3", img: Pools, name: "Amazing pools" },
        { id: "4", img: Islands, name: "Islands" },
        { id: "5", img: Npark, name: "National parks" },
        { id: "6", img: Ski, name: "Skiing" },
        { id: "7", img: Arctic, name: "Arctic" },
        { id: "8", img: Views, name: "Amazing Views" },
        { id: "9", img: Tropical, name: "Tropical" },
        { id: "10", img: Camp, name: "Camping" },
        { id: "11", img: Boats, name: "Boats" },
        { id: "12", img: Iconic, name: "Iconic sites" },
        { id: "13", img: Lake, name: "Lakes" },
        { id: "14", img: Surf, name: "Surfing" },
        { id: "15", img: Luxe, name: "Luxe" },
    ];

    return (
        <nav aria-label='Page navigation example' className='px-[5rem] '>
            <ul className='inline-flex items-center w-full justify-between gap-6 font-book font-black'>
                <li>
                    <a
                        href='#'
                        className='block p-1 leading-tight bg-white rounded-full border border-zinc-400 hover:shadow-md transition'
                    >
                        <span className='sr-only'>Previous</span>
                        <svg
                            aria-hidden='true'
                            className='w-5 h-5'
                            fill='#141414'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fill-rule='evenodd'
                                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                                clip-rule='evenodd'
                            ></path>
                        </svg>
                    </a>
                </li>
                {tab.map((spots) => {
                    return (
                        <li
                            key={spots.id}
                            className='hover:border-zinc-300 border-b-2 opacity-60 hover:opacity-100 transition-all border-transparent py-3 flex flex-col justify-items-center gap-3'
                        >
                            <img
                                src={spots.img}
                                width='25px'
                                className='mx-auto '
                            />
                            <p className='text-xs text-zinc-500 tracking-[0.02em]'>
                                {spots.name}
                            </p>
                        </li>
                    );
                })}
                {/* <li className='hover:border-b-2  py-2 flex flex-col justify-items-center gap-2'>
                    <img src={Tropical} width='25px' className='mx-auto' />
                    <p className='text-xs text-zinc-500 tracking-[0.02em]'>
                        Tropical
                    </p>
                </li> */}

                <li>
                    <a
                        href='#'
                        className='block p-1 leading-tight bg-white rounded-full border border-zinc-400 hover:shadow-md transition'
                    >
                        <span className='sr-only'>Next</span>
                        <svg
                            aria-hidden='true'
                            className='w-5 h-5'
                            fill='#141414'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fill-rule='evenodd'
                                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                clip-rule='evenodd'
                            ></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
