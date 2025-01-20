import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@nextui-org/react';

Button1.propTypes = {
  isDisabled: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

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

export default Button1;
