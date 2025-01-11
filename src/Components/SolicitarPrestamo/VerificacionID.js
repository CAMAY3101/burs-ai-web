import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import pendingIcon from "../../Assets/icons/pending-icon.png";
import { useAuthContext } from "../../Contexts/authContext";
import { endpoint } from "../../Config/utils/urls";
import {
  useValidationStepFAD,
  useGenerateToken,
} from "../../hooks/useQueryHooks.js";

import TitlePage from "../CustomizeComponents/TitlePage";

function VerificacionID() {
  const { navigateToNextStep, accessTokenExist, checkToken } = useAuthContext();
  const [message, setMessage] = useState(
    "Te enviamos una invitación a tu correo electrónico para validar tu INE e identidad. Revisa tu bandeja de entrada o spam."
  );

  const { data: validationStepFAD, isLoading: isLoadingFADData } =
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

  return (
    <div className="w-1/3 flex flex-col items-center space-y-10">
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
