import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { useFormContext, Controller } from 'react-hook-form';
import { Select, SelectItem } from '@nextui-org/react';

const styles_select = {
  label: [
    '!text-dark-blue-950',
    'group-data-[filled-within=true]:text-dark-blue-950',
    'font-rubik',
    'font-medium',
    'text-base',
  ],
  requiredAsterisk: ['text-red-500', 'ml-1'],
  trigger: [
    'rounded-xl',
    'border-dark-blue-400',
    'data-[hover=true]:border-dark-blue-700',
    'data-[open=true]:border-dark-blue-900',
    'data-[focus=true]:border-dark-blue-900',
    '!cursor-text',
    'max-h-[40px]',
    'py-1',
  ]
};

const SelectField = ({
  isRequired = true,
  label,
  name,
  options = [],
  placeholder,
  isDisabled = false,
}) => {
  const { control } = useFormContext();
  const [isValueSelected, setIsValueSelected] = useState(false);

  if (!control) {
    console.error(
      'useFormContext no está disponible. Asegúrate de que el componente esté dentro de un FormProvider.'
    );
    return null;
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="w-full">
          <Select
            placeholder={placeholder}
            label={label}
            isRequired={isRequired}
            labelPlacement="outside"
            variant="bordered"
            size="md"
            classNames={{
              ...styles_select,
              value: [
                'font-rubik',
                'font-regular',
                'text-[15px]',
                isValueSelected ? 'text-dark-blue-950' : 'text-dark-blue-300',
              ],
            }}
            selectedKeys={field.value ? new Set([field.value]) : new Set()}
            onSelectionChange={(keys) => {
              const value = Array.from(keys).join('');
              setIsValueSelected(!!value);
              field.onChange(value);
            }}
            isDisabled={isDisabled}
          >
            {options.map((option) => (
              <SelectItem value={option.value} key={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select>
          {error && (
            <p className="text-red-500 text-sm mt-1">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};


SelectField.propTypes = {
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default SelectField;
