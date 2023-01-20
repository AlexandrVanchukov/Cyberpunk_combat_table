import React from 'react';
import classes from "./Select.modal.css";

const Select = ({options, defaultValue, value, onChange}) => {
    console.log(classes.selectCss)
    return (
            <select
                className={classes}
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option value="">{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
    );
};

export default Select;