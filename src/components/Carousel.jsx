import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{
                ...style,
                background: "white",
                color: "black",
            }}
            onClick={onClick}
        >
            <a
                href='#'
                className='absolute -top-2 left-0 p-1 leading-tight bg-white rounded-full border border-zinc-400 hover:shadow-md transition'
            >
                <span className='sr-only '>Next</span>
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
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white" }}
            onClick={onClick}
        >
            {" "}
            <a className='leading-tight p-1 bg-white absolute -left-2 -top-2 rounded-full border border-zinc-400 hover:shadow-md transition'>
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
        </div>
    );
}

export default class CustomArrows extends Component {
    render() {
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

        const settings = {
            dots: false,
            infinite: false,
            slidesToShow: 10,
            slidesToScroll: 5,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <div className=''>
                <Slider {...settings}>
                    {tab.map((spots) => {
                        return (
                            <div
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
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}
