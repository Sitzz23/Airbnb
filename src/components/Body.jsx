import React, { useEffect } from "react";

function Body() {
    const Hotel = [
        {
            id: 1,
            name: "Abiansemal",
            country: "Indonesia",
            distance: "4,548",
            dates: "13-20 Apr",
            rates: "27,081",
            img: "https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720",
        },
        {
            id: 2,
            name: "El Nido",
            country: "Philipines",
            distance: "4,255",
            dates: "19-24 Sep",
            rates: "8,730",
            img: "https://a0.muscache.com/im/pictures/3648aed7-f383-4b74-ab5d-f444e20a85f2.jpg?im_w=1200",
        },
        {
            id: 3,
            name: "Volimes",
            country: "Greece",
            distance: "6,436",
            dates: "5-10 Oct",
            rates: "16,400",
            img: "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720",
        },
        {
            id: 4,
            name: "Ko Samui",
            country: "Thailand",
            distance: "2,038",
            dates: "23-28 Oct",
            rates: "13,634",
            img: "https://a0.muscache.com/im/pictures/14152ff7-28fa-48cc-9c90-ac787fb5bb6b.jpg?im_w=720",
        },
        {
            id: 5,
            name: "Langkawi",
            country: "Malaysia",
            distance: "2,265",
            dates: "24-29 Oct",
            rates: "9,639",
            img: "https://a0.muscache.com/im/pictures/843cf143-d488-4723-b808-d47f952dbf0c.jpg?im_w=720",
        },
        {
            id: 6,
            name: "Kuusamo",
            country: "Finland",
            distance: "7,054",
            dates: "19-26 Sep",
            rates: "14,791",
            img: "https://a0.muscache.com/im/pictures/7809096f-55f0-47c9-b0be-75bbaeec2122.jpg?im_w=720",
        },
        {
            id: 7,
            name: "Cagli",
            country: "Italy",
            distance: "7,219",
            dates: "25-30 Sep",
            rates: "1,02,478",
            img: "https://a0.muscache.com/im/pictures/f753c848-73e6-4510-9f80-ae0ee8f76552.jpg?im_w=720",
        },
        {
            id: 8,
            name: "Baa Atoll",
            country: "Maldives",
            distance: "1,136",
            dates: "20-26 Sep",
            rates: "9,47,823",
            img: "https://a0.muscache.com/im/pictures/bb5079d1-426f-4014-9b08-9c472915b532.jpg?im_w=720",
        },
        {
            id: 9,
            name: "Kamala Beach",
            country: "Thailand",
            distance: "2,063",
            dates: "21-28 Sep",
            rates: "99,561",
            img: "https://a0.muscache.com/im/pictures/9836d059-897c-4ae7-9d37-77c60c4fa0c7.jpg?im_w=720",
        },
        {
            id: 10,
            name: "Gardone Riviera",
            country: "Italy",
            distance: "7,401",
            dates: "18-24 Sep",
            rates: "8,37,739",
            img: "https://a0.muscache.com/im/pictures/monet/Luxury-553449454187790697/original/475750f4-33de-4e1d-bbd7-f1939896ce9c?im_w=720",
        },
        {
            id: 11,
            name: "Vinišće",
            country: "Croatia",
            distance: "6,396",
            dates: "20-25 Sep",
            rates: "1,03,720",
            img: "https://a0.muscache.com/im/pictures/0816b65c-cfa7-4b92-a5b5-197c2f7ea0dd.jpg?im_w=720",
        },
        {
            id: 12,
            name: "Mikonos",
            country: "Greece",
            distance: "6,049",
            dates: "18-25 Sep",
            rates: "5,43,569",
            img: "https://a0.muscache.com/im/pictures/monet/Luxury-645492084705922533/original/3feec4f9-0659-4e52-ad86-0c1b2c8639ed?im_w=720",
        },
        {
            id: 13,
            name: "Kodaikanal",
            country: "India",
            distance: "441",
            dates: "19-24 Sep",
            rates: "2,292",
            img: "https://a0.muscache.com/im/pictures/2cb0b72d-e4de-4afd-9523-db908d0f17bc.jpg?im_w=720",
        },
        {
            id: 14,
            name: "Aspa Bruk",
            country: "Sweden",
            distance: "7,364",
            dates: "23-28 Oct",
            rates: "57,455",
            img: "https://a0.muscache.com/im/pictures/c96f41de-87e8-4cd3-95d9-14bd6bfcebae.jpg?im_w=720",
        },
        {
            id: 15,
            name: "Vasai",
            country: "India",
            distance: "1,055",
            dates: "26-30 Sep",
            rates: "18,427",
            img: "https://a0.muscache.com/im/pictures/miso/Hosting-17895682/original/e8473cba-90f4-4e4a-bfb0-2209721432d4.jpeg?im_w=720",
        },
        {
            id: 16,
            name: "Rovaneimi",
            country: "Finland",
            distance: "7,162",
            dates: "4-9 Oct",
            rates: "47,254",
            img: "https://a0.muscache.com/im/pictures/fb860347-88b9-4a1a-acfe-d518f3f77072.jpg?im_w=720",
        },
    ];

    return (
        <main className='px-[5rem] mb-14'>
            <div class='grid gap-6 my-4 overflow-hidden grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                {Hotel.map((hotel) => {
                    return (
                        <div
                            className='text-left overflow-hidden mb-4'
                            key={hotel.id}
                        >
                            <div>
                                <img
                                    className='rounded-xl object-cover h-72'
                                    src={hotel.img}
                                    alt='ghar'
                                />
                            </div>
                            <div className='py-2'>
                                <h5 className=' font-med  text-gray-900 '>
                                    {hotel.name},&nbsp;{hotel.country}
                                </h5>
                                <p className=' text-zinc-500 text-sm font-light'>
                                    {hotel.distance} &nbsp;kilometers
                                </p>
                                <p className=' text-zinc-500 text-sm font-light'>
                                    {hotel.dates}
                                </p>
                            </div>
                            <div className='text-gray-900 text-sm'>
                                <span className='font-med '>
                                    ₹{hotel.rates}
                                </span>
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
