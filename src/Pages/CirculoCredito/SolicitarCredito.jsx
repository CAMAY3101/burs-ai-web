import React, { useState } from "react";
import NavbarLoan from "../../shared/components/NavbarLoan";
import { StepperCirculoCredito } from "../../Components/CirculoCredito/StepperCirculoCredito";

const SolicitudCredito = () => {
  return (
    <div>
      <NavbarLoan />
      <StepperCirculoCredito />
    </div>
  );
};

export default SolicitudCredito;
