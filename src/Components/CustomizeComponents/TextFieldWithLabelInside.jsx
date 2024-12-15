import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { Input } from '@nextui-org/react';

const styles_input = {
  label: [
    'group-data-[filled-within=true]:text-dark-blue-950',
    'font-rubik',
    'font-medium',
    'text-base',
  ],
  input: [
    'font-rubik',
    'font-regular',
    'text-[15px]',
    'text-dark-blue-950',
    'placeholder:text-dark-blue-300',
  ],
  inputWrapper: [
    'rounded-xl',
    'border-dark-blue-400',
    'data-[hover=true]:border-dark-blue-700',
    'group-data-[focus=true]:border-dark-blue-900',
    '!cursor-text',
  ],
};

function TextFieldWithLabelInside({
  type = 'text',
  placeholder,
  label,
  isRequired = true,
  isPasswordField = false,
  visibleEyeIcon,
  invisibleEyeIcon,
  name,
  helperText,
  enableCurrencyFormatting = false, // Si se necesita soporte para formatos
  ...other
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);
  const { control } = useFormContext();
  console.log('control: ', control)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error }}) => (
        <div className="w-full">
          <Input
            {...field}
            fullWidth
            isRequired={isRequired}
            type={isPasswordField ? (isPasswordVisible ? 'text' : 'password') : type}
            placeholder={placeholder}
            label={label}
            size="md"
            variant="bordered"
            classNames={styles_input}
            labelPlacement="inside"
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
            error={!!error}
            helperText={error ? error.message : helperText}
            {...other}
          />
        </div>
      )}
    />
  );
}

TextFieldWithLabelInside.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  isPasswordField: PropTypes.bool,
  visibleEyeIcon: PropTypes.string,
  invisibleEyeIcon: PropTypes.string,
  helperText: PropTypes.node,
  enableCurrencyFormatting: PropTypes.bool,
};

export default TextFieldWithLabelInside;