import React from "react";
import { Views, Pools } from "../assets/icons";

function Pagination() {
    return (
        <nav aria-label='Page navigation example' className='px-[5rem] pt-4'>
            <ul className='inline-flex items-center w-full justify-between'>
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
                <li>
                    <div className=' text-gray-500 '>
                        <img src={Pools} width='25px' />
                    </div>
                </li>
                <li>
                    <a
                        href='#'
                        className='py-2 px-3 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 '
                    >
                        2
                    </a>
                </li>
                <li>
                    <a
                        href='#'
                        aria-current='page'
                        className='py-2 px-3 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 '
                    >
                        3
                    </a>
                </li>
                <li>
                    <a
                        href='#'
                        className='py-2 px-3 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 '
                    >
                        4
                    </a>
                </li>
                <li>
                    <a
                        href='#'
                        className='py-2 px-3 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 '
                    >
                        5
                    </a>
                </li>
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
