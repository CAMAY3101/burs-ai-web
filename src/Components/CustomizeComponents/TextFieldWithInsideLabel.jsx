import React from "react";
import { Input } from "@nextui-org/react";

const styles_input = {
  label: [
    "group-data-[filled-within=true]:text-dark-blue-950", // Cambia el color del label cuando el campo está lleno
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
  ],
};

function TextFieldWithInsideLabel({ type, placeholder, label, value, onValueChange }) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      label={label}
      size="md"
      variant="bordered"
      classNames={{
        label: styles_input.label.join(" "), // Estilos para el label
        input: styles_input.input.join(" "), // Estilos para el input
        inputWrapper: styles_input.inputWrapper.join(" "), // Estilos para el contenedor
      }}
      labelPlacement="inside"
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
    />
  );
}

export default TextFieldWithInsideLabel;
