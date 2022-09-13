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
            <option value=''>Select ...</option>
            {getCountries().map((country) => (
                <option key={country} value={country}>
                    {labels[country]} +{getCountryCallingCode(country)}
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
        <div className='font-med  flex flex-col gap-3 p-6'>
            <h1 className='text-left text-2xl'>Welcome to Airbnb!</h1>
            <div className='text-left focus:outline-none '>
                <CountrySelect
                    labels={en}
                    value={country}
                    onChange={setCountry}
                    className='focus:outline-none'
                />
            </div>
        </div>
    );
}

export default Sign;
