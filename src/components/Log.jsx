import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function Log({setIssOpen}) {
    return (
        <div className='text-right font-book bg-'>
            <Menu as='div' className='relative inline-block text-left'>
                <div>
                    <Menu.Button className=' rounded-full border-[1px] p-1 hover:shadow-md transition'>
                        <div className='flex'>
                            <Bars3Icon
                                className='w-5 mt-[1px] mx-2 text-[rgb(40,40,40)]'
                                aria-hidden='true'
                            />
                            <UserCircleIcon
                                className='w-8 text-[rgb(111,111,111)]'
                                aria-hidden='true'
                            />
                        </div>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                >
                    <Menu.Items className='absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-xl overflow-clip bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='py-2 '>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => setIssOpen(true)}
                                        className={`${
                                            active
                                                ? "bg-zinc-100 "
                                                : "text-gray-800"
                                        } group flex w-full items-center px-5 font-med py-2  text-sm`}
                                    >
                                        Sign Up
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active
                                                ? "bg-zinc-100 "
                                                : "text-gray-600"
                                        } group flex w-full items-center px-5 font-book py-2  text-sm`}
                                    >
                                        Log In
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className='py-2'>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='https://www.airbnb.co.in/host/homes'
                                        className={`${
                                            active
                                                ? "bg-zinc-100 "
                                                : "text-gray-600  "
                                        } group flex w-full items-center px-5 font-book py-2  text-sm `}
                                    >
                                        Host your home
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='https://www.airbnb.co.in/host/experiences?from_nav=1'
                                        className={`${
                                            active
                                                ? "bg-zinc-100 "
                                                : "text-gray-600"
                                        } group flex w-full items-center px-5 font-book py-2  text-sm`}
                                    >
                                        Host an experience
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='https://www.airbnb.co.in/help?audience=guest'
                                        className={`${
                                            active
                                                ? "bg-zinc-100 "
                                                : "text-gray-600"
                                        } group flex w-full items-center px-5 font-book py-2  text-sm`}
                                    >
                                        Help
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
