import React from "react";

function Tabl() {
    const places = [
        { id: 1, city: "London", country: "England" },
        { id: 2, city: "Paris", country: "Île-de-France" },
        { id: 3, city: "New York", country: "New York" },
        { id: 4, city: "Barcelona", country: "Catalonia" },
        { id: 5, city: "Istanbul", country: "Istanbul" },
        { id: 6, city: "Bali", country: "Indonesia" },
        { id: 7, city: "Amsterdam", country: "North Holland" },
        { id: 8, city: "Miami", country: "Florida" },
        { id: 9, city: "Madrid", country: "Community of Madrid" },
        { id: 10, city: "Los Angeles", country: "California" },
        { id: 11, city: "Rome", country: "Lazio" },
        { id: 12, city: "San Diego", country: "California" },
    ];

    return (
        <div className='grid grid-cols-4 grid-rows-3 gap-8 pt-11 place-content-start'>
            {places.map((place) => {
                return (
                    <div
                        key={place.id}
                        className='w-fit flex flex-col text-left'
                    >
                        <p className='font-light text-sm'>{place.city}</p>
                        <p className='font-light text-sm text-zinc-500'>
                            {place.country}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default Tabl;
