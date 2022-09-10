import { useState } from "react";
import { Tab } from "@headlessui/react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
    let [categories] = useState({
        Anywhere: [
            {
                id: 1,
                title: "Does drinking coffee make you smarter?",
                date: "5h ago",
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: "2h ago",
                commentCount: 3,
                shareCount: 2,
            },
        ],
        "Any week": [
            {
                id: 1,
                title: "Is tech making coffee better or worse?",
                date: "Jan 7",
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: "The most innovative things happening in coffee",
                date: "Mar 19",
                commentCount: 24,
                shareCount: 12,
            },
        ],
        "Add guests": [
            {
                id: 1,
                title: "Ask Me Anything: 10 answers to your questions about coffee",
                date: "2d ago",
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: "4d ago",
                commentCount: 1,
                shareCount: 2,
            },
        ],
    });

    return (
        <div className=' w-[21rem] px-2 '>
            <Tab.Group>
                <Tab.List className='flex gap-1 rounded-full p-1 border-[1px] hover:shadow-md'>
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                (classNames =
                                    "w-full p-1 text-sm font-medium hover:bg-zinc-100 transition rounded-full leading-5 text-[rgb(40,40,40)] ")
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                    <div>
                        <MagnifyingGlassCircleIcon
                            className='w-10 text-[#ff395d]'
                            aria-hidden='true'
                        />
                    </div>
                </Tab.List>
                {/* <Tab.Panels className='mt-2'>
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                "rounded-xl bg-white p-3",
                                "ring-white focus:outline-none "
                            )}
                        >
                            <ul>
                                {posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className='relative rounded-md p-3 hover:bg-gray-100'
                                    >
                                        <h3 className='text-sm font-medium leading-5'>
                                            {post.title}
                                        </h3>

                                        <ul className='mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500'>
                                            <li>{post.date}</li>
                                            <li>&middot;</li>
                                            <li>
                                                {post.commentCount} comments
                                            </li>
                                            <li>&middot;</li>
                                            <li>{post.shareCount} shares</li>
                                        </ul>

                                        <a
                                            href='#'
                                            className={classNames(
                                                "absolute inset-0 rounded-md",
                                                " focus:z-10 focus:outline-none "
                                            )}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels> */}
            </Tab.Group>
        </div>
    );
}
