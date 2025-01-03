import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '@nextui-org/react'

const styles_input = {
    label: [
        "group-data-[filled-within=true]:text-dark-blue-950",
        "font-rubik",
        "font-medium",
        "text-base",
    ],
    input: [
        "font-rubik",
        "font-regular",
        "text-[15px]",
        "text-dark-blue-950",
        "placeholder:text-dark-blue-300",
    ],
    inputWrapper: [
        "rounded-xl",
        "border-dark-blue-400",
        "data-[hover=true]:border-dark-blue-700",
        "group-data-[focus=true]:border-dark-blue-900",
        "!cursor-text",
    ]
};


function TextField({type, placeholder, label,value, onValueChange, name, errorMessage, isRequired = true }) {
  return (
    <div className="w-full">
          <Input
            isRequired={isRequired}
            type={type}
            placeholder={placeholder}
            label={label}
            size='md'
            variant='bordered'
            classNames={styles_input}
            labelPlacement={'outside'}
            value={value} 
            onChange={(e) => onValueChange(e.target.value)}
            name={name}
            errorMessage={errorMessage}
            />
    </div>
  );
}

TextField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onValueChange: PropTypes.func,
    name: PropTypes.string,
    error: PropTypes.string,
    isRequired: PropTypes.bool,
}

export default TextField