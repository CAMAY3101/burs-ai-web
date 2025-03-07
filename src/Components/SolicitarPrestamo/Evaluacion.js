import React, { useState } from "react";
import {Button, Progress} from "@heroui/react";

import { useAuthContext } from "../../Contexts/authContext";
import TitlePage from "../CustomizeComponents/TitlePage";

function Evaluacion() {
  const { navigateToNextStep } = useAuthContext();
  const [message, setMessage] = useState(
    "Gracias por tu preferencia! Estamos evaluando tu solicitud para otorgarte un prestamo a la medida 🥳"
  );

  const onSubmit = () => {
    // 1) Datos Personales
    // 2) Tu historial
    // 3) Tu domicilio
    // 4) Verificación telefono (CiCre) (endpoint ya registra siguiente paso)
    // 5) Evaluación de prestamo (no existe endpoint)
    // 6) Selección de monto (no existe endpoint)
    // 7) Datos de Deposito (no existe endpoint)
    // 8) Datos biometricos (ya tenemos endpoint) 
    // 

    navigateToNextStep(6);

    
  };


  return (
    <div className='w-full max-w-lg flex flex-col space-y-10 mx-auto px-8 items-center text-center'>
      <TitlePage title="Evaluación en proceso" />

      <Progress isStriped isIndeterminate aria-label="Loading..." className="max-w-md" color="secondary" size="md"/>
      
      <p className="font-rubik text-md text-dark-blue-950 justify-center">
        {message}
      </p>

      <Button
        onPress={onSubmit}
        size="md"
        color="secondary"
        className="w-full"
      >
        Continuar
      </Button>
    </div>
  );
}

export default Evaluacion;
