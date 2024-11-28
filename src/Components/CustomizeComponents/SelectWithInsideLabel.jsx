import React, { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

const styles_select = {
  label: [
    "!text-dark-blue-950", // Color del label
    "font-rubik",
    "font-medium",
    "text-base",
  ],
  trigger: [
    "rounded-xl",
    "border-dark-blue-400",
    "data-[hover=true]:border-dark-blue-700",
    "data-[open=true]:border-dark-blue-900",
    "data-[focus=true]:border-dark-blue-900",
    "!cursor-text",
  ],
  placeholder: [
    "text-dark-blue-300", // Estilo del placeholder
  ],
  value: [
    "text-dark-blue-950", // Estilo del texto seleccionado
  ],
};

const SelectWithInsideLabel = ({
  label,
  options = [],
  placeholder,
  selectedKeys,
  onSelectionChange,
  isDisabled = false,
}) => {
  const [selectedValue, setSelectedValue] = useState(selectedKeys);

  // Sincronizar el valor inicial con `selectedKeys`
  useEffect(() => {
    setSelectedValue(selectedKeys);
  }, [selectedKeys]);

  const handleSelectionChange = (value) => {
    setSelectedValue(value);
    onSelectionChange(value);
  };

  // Verificar si el valor seleccionado es el placeholder
  const isPlaceholderSelected =
    !selectedValue ||
    (Array.isArray(selectedValue) && selectedValue[0] === "") ||
    selectedValue === placeholder;

  return (
    <div className="space-y-2">
      <Select
        label={label}
        labelPlacement="inside"
        placeholder={placeholder}
        variant="bordered"
        size="md"
        classNames={{
          label: styles_select.label.join(" "),
          trigger: styles_select.trigger.join(" "),
          value: isPlaceholderSelected
            ? styles_select.placeholder.join(" ") // Placeholder style
            : styles_select.value.join(" "), // Selected value style
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

export default SelectWithInsideLabel;
