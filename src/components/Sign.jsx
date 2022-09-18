import { React, useState } from "react";
import PropTypes from "prop-types";
import {
    getCountries,
    getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";

function Sign() {
    const CountrySelect = ({ value, onChange, labels, ...rest }) => (
        <select
            {...rest}
            value={value}
            onChange={(event) => onChange(event.target.value || undefined)}
        >
            <option className=' focus:outline-none' value=''>
                Select ...
            </option>
            {getCountries().map((country) => (
                <option
                    className=' focus:outline-none'
                    key={country}
                    value={country}
                >
                    {labels[country]} (+{getCountryCallingCode(country)})
                </option>
            ))}
        </select>
    );

    CountrySelect.propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        labels: PropTypes.objectOf(PropTypes.string).isRequired,
    };

    const [country, setCountry] = useState();
    return (
        <div className='  flex flex-col gap-3 p-6'>
            <h1 className='text-left font-med text-2xl'>Welcome to Airbnb!</h1>
            <div>
                <div className='text-left relative'>
                    <CountrySelect
                        labels={en}
                        value={country}
                        onChange={setCountry}
                        className='focus:outline-none rounded-t-lg pt-[26px] w-full border-gray-400'
                    />
                    <span className='font-light text-xs absolute left-3 top-[10px] text-gray-400 '>
                        Country/Region
                    </span>
                </div>
                <div className='text-left relative'>
                    <div className='relative'>
                        <div className='relative '>
                            <input
                                type='text'
                                id='floating_outlined'
                                className='block px-2.5 pb-3 pt-5 w-full text-sm text-gray-900 bg-transparent border-t-0 rounded-b-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 peer'
                                placeholder=' '
                            />
                            <label
                                for='floating_outlined'
                                className='absolute font-light text-sm text-gray-500 dark:text-gray-400 duration-200 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[.80] peer-focus:-translate-y-[8px] left-1'
                            >
                                Phone Number
                            </label>
                        </div>
                        <p className=' py-2 text-xs text-gray-600 font-light'>
                            We’ll call or text you to confirm your number.
                            Standard message and data rates apply.&nbsp;
                            <a
                                href='https://www.airbnb.co.in/help/article/2855/airbnb-privacy'
                                className='underline text-gray-800 font-med'
                            >
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
                <div className='grad w-full text-center font-med text-white my-2 p-3 rounded-lg cursor-pointer'>
                    Continue
                </div>
                <div className='py-4 relative'>
                    <hr />
                    <span className='absolute px-4 text-gray-500 font-book text-xs bg-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
                        or
                    </span>
                </div>
                <div className='flex flex-col gap-4 py-4'>
                    <div className='border border-black text-sm w-full text-center font-med text-black cursor-pointer p-3 rounded-lg'>
                        Continue with Facebook
                    </div>
                    <div className='border border-black text-sm  w-full text-center font-med text-black cursor-pointer p-3 rounded-lg'>
                        Continue with Google
                    </div>
                    <div className='border border-black text-sm  w-full text-center font-med text-black cursor-pointer p-3 rounded-lg'>
                        Continue with Apple
                    </div>
                    <div className='border border-black text-sm  w-full text-center font-med text-black cursor-pointer p-3 rounded-lg'>
                        Continue with Email
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sign;
