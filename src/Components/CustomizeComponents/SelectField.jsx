import React, { useEffect, useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const styles_select = {
  label: [
    "text-dark-blue-950",
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

  return (
    <div className="w-full">
      <label className={`${styles_select.label.join(" ")} flex items-center`}>
        {label}
        {isRequired && <span className={styles_select.requiredAsterisk.join(" ")}>*</span>}
      </label>
      <Select
        placeholder={placeholder}
        variant="bordered"
        size="md"
        classNames={{
          trigger: styles_select.trigger.join(" "),
          value: isPlaceholderSelected
            ? "text-dark-blue-300"  // Si es el placeholder, usamos dark-blue-300
            : "text-dark-blue-950", // Si hay una opción seleccionada, usamos dark-blue-950
        }}
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
  );
};

export default SelectField;
