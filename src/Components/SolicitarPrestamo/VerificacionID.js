import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import pendingIcon from "../../Assets/icons/pending-icon.png";
import { useAuthContext } from "../../Contexts/authContext";
import { useValidationStepFAD } from "../../hooks/useQueryHooks.js";

import TitlePage from "../CustomizeComponents/TitlePage";

function VerificacionID() {
  const { navigateToNextStep } = useAuthContext();
  const [message, setMessage] = useState(
    "Te enviamos una invitación a tu correo electrónico para validar tu INE e identidad. Revisa tu bandeja de entrada o spam."
  );

  const { isLoading: isLoadingFADData } =
    useValidationStepFAD(
      (data) => {
        // console.log(data.data.status);
        if (data.data.status === "success") {
          toast.success("Validación completada.");
          navigateToNextStep(7);
        } else if (data.data.status === "in progress") {
          setMessage(data.data.message);
        } else {
          console.error("Estado inesperado: ", data);
        }
      },
      () => console.error("Ocurrió un error al verificar los datos de FAD.")
    );

    if (isLoadingFADData) {
      return (
        <div className='w-full max-w-lg flex flex-col space-y-10 mx-auto px-8 items-center text-center'>
          <p className="font-rubik text-md text-dark-blue-950">Cargando validación...</p>
        </div>
      );
    }

  return (
    <div className='w-full max-w-lg flex flex-col space-y-10 mx-auto px-8 items-center text-center'>
      <Toaster></Toaster>
      <TitlePage title="Verificación de INE e Identidad" />
      <img src={pendingIcon} alt="Under Construction" className="w-2/4" />
      <p className="font-rubik text-md text-dark-blue-950 justify-center">
        {message}
      </p>
    </div>
  );
}

export default VerificacionID;
