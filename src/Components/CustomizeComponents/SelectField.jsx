import React, { useEffect, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Select, SelectItem } from "@nextui-org/react";

const styles_select = {
  label: [
    "group-data-[filled-within=true]:text-dark-blue-950",
    "font-rubik",
    "font-medium",
    "text-base",
  ],
  requiredAsterisk: [
    "text-red-500",
    "ml-1",
  ],
  trigger: [
    "rounded-xl",
    "border-dark-blue-400",
    "data-[hover=true]:border-dark-blue-700",
    "data-[open=true]:border-dark-blue-900",
    "data-[focus=true]:border-dark-blue-900",
    "!cursor-text",
    "max-h-[40px]",
    "py-1",
  ],
  value: [
    "font-rubik",
    "font-regular",
    "text-[15px]",
  ],
  placeholder: [
    "text-dark-blue-300",
  ],
};

const SelectField = ({
  isRequired = true,
  label,
  name,
  options = [],
  placeholder,
  selectedKeys,
  onSelectionChange,
  isDisabled = false,
}) => {
  const [selectedValue, setSelectedValue] = useState(selectedKeys);

  // Cuando el valor seleccionado cambia
  useEffect(() => {
    setSelectedValue(selectedKeys);
  }, [selectedKeys]);

  const handleSelectionChange = (value) => {
    onSelectionChange(value);
    setSelectedValue(value); // Actualizamos el estado de la selección
  };

  // Verificar si el valor seleccionado corresponde al placeholder
  const isPlaceholderSelected = selectedValue?.length === 0 || selectedValue === placeholder;

  const context = useFormContext();

  if (!context) {
    console.error("useFormContext no está disponible. Asegúrate de que el componente esté dentro de un FormProvider.");
    return null;
  }

  const { control } = context;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error }}) => (
        <div className="w-full">
          <Select
            placeholder={placeholder}
            label={label}
            isRequired={isRequired}
            labelPlacement='outside'
            variant="bordered"
            size="md"
            classNames={styles_select}
            selectedKeys={selectedValue}
            onSelectionChange={handleSelectionChange}
            isDisabled={isDisabled}
          >
            {options.map((option) => (
              <SelectItem value={option.value} key={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      )}
    />
  );
};

export default SelectField;
