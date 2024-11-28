import React from 'react';
import { Button } from '@nextui-org/react';

const ButtonContinue = ({ isDisabled, handleSubmit, label ="Continuar" }) => {
  return (
    <Button
      size="large"
      color="secondary"
      className="w-full"
      isDisabled={isDisabled}
      onClick={handleSubmit}
    >
      {label}
    </Button>
  );
};

export default ButtonContinue;
