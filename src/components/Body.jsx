import React, { useEffect } from "react";
import axios from "axios";
import Ab from "../assets/images/ab.jpg";

function Body() {
    // const [images, setImages] = useState([]);

    useEffect(() => {
        const apiRoot = "https://api.unsplash.com";
        const accessKey = import.meta.env.VITE_ACCESSKEY;

        axios.get(
            `${apiRoot}/search/photos?page=1&query=resorts&client_id=${accessKey}`
        );
        //.then((res) => setImages([...images, ...res.data]));
    }, []);

    const Hotel = [
        {
            id: 1,
            name: "Abiansemal",
            country: "Indonesia",
            distance: "4,548 kilometers",
            dates: "13-20 Apr",
            rates: "₹27,081",
        },
        { id: 2, name: "", country: "", distance: "", dates: "" },
        { id: 3, name: "", country: "", distance: "", dates: "" },
        { id: 4, name: "", country: "", distance: "", dates: "" },
        { id: 5, name: "", country: "", distance: "", dates: "" },
        { id: 6, name: "", country: "", distance: "", dates: "" },
        { id: 7, name: "", country: "", distance: "", dates: "" },
        { id: 8, name: "", country: "", distance: "", dates: "" },
        { id: 9, name: "", country: "", distance: "", dates: "" },
        { id: 10, name: "", country: "", distance: "", dates: "" },
        { id: 11, name: "", country: "", distance: "", dates: "" },
        { id: 12, name: "", country: "", distance: "", dates: "" },
        { id: 13, name: "", country: "", distance: "", dates: "" },
        { id: 14, name: "", country: "", distance: "", dates: "" },
        { id: 15, name: "", country: "", distance: "", dates: "" },
        { id: 16, name: "", country: "", distance: "", dates: "" },
    ];

    return (
        <main className='px-[5rem]'>
            <div class='grid grid-cols-4 gap-6 my-4 overflow-hidden '>
                {Hotel.map((hotel) => {
                    return (
                        <div
                            className='text-left overflow-hidden mb-4'
                            key={hotel.id}
                        >
                            <div>
                                <img
                                    className='rounded-xl object-cover h-72'
                                    src={Ab}
                                    alt='ghar'
                                />
                            </div>
                            <div className='py-2'>
                                <h5 className=' font-med  text-gray-900 '>
                                    {hotel.name},&nbsp;{hotel.country}
                                </h5>
                                <p className=' text-zinc-500 text-sm font-light'>
                                    {hotel.distance}
                                </p>
                                <p className=' text-zinc-500 text-sm font-light'>
                                    {hotel.dates}
                                </p>
                            </div>
                            <div className='text-gray-900 text-sm'>
                                <span className='font-med '>{hotel.rates}</span>
                                &nbsp;night
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}

export default Body;
