import React from "react";
import Card from "./Card";

function Body() {
    return (
        <main className='px-[5rem]'>
            <div class='flex flex-wrap -mx-3 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-3 xl:-mx-2'>
                <div class='my-3 px-3 w-1/4 overflow-hidden sm:my-3 sm:px-3 sm:w-full md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4'>
                    <div>
                        <Card />
                    </div>
                </div>

                <div class='my-3 px-3 w-1/4 overflow-hidden sm:my-3 sm:px-3 sm:w-full md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4'>
                    card aayega yahan pe
                </div>
            </div>
        </main>
    );
}

export default Body;
