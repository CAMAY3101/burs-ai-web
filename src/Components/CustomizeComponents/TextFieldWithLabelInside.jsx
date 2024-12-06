import React, { useState } from 'react';
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


function TextField({type, placeholder, label,value, onValueChange, name, errorMessage, isRequired = true, isPasswordField = false, visibleEyeIcon, invisibleEyeIcon }) {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <div className="w-full">
          <Input
            isRequired={isRequired}
            type={isPasswordField && !isPasswordVisible ? "password" : type}
            placeholder={placeholder}
            label={label}
            size='md'
            variant='bordered'
            classNames={styles_input}
            labelPlacement={'inside'}
            value={value} 
            onChange={(e) => onValueChange(e.target.value)}
            name={name}
            errorMessage={errorMessage}
            endContent={
              isPasswordField && (
                  <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                  >
                      <img
                          src={isPasswordVisible ? invisibleEyeIcon : visibleEyeIcon}
                          alt={isPasswordVisible ? 'Hide Password' : 'Show Password'}
                          className="w-6"
                      />
                  </button>
              )
          }
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
    errorMessage: PropTypes.string,
    isRequired: PropTypes.bool,
    isPasswordField: PropTypes.bool,
    visibleEyeIcon: PropTypes.string,
    invisibleEyeIcon: PropTypes.string,
}

export default TextField