import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "@heroui/react";

const Button1 = ({ isDisabled, handleSubmit, label ="Continuar" }) => {
  return (
    <Button
      size="large"
      color="secondary"
      className="w-full"
      isDisabled={isDisabled}
      onPress={handleSubmit}
    >
      {label}
    </Button>
  );
};

Button1.propTypes = {
  isDisabled: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button1;
