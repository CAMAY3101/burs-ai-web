import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../Contexts/authContext";
import {
  LOGIN,
  CIRCULO_CREDITO,
  CIRCULO_CREDITO_VERIFICAR_DATOS,
  CIRCULO_CREDITO_TERMINOS_CONDICIONES,
} from "../../Config/Router/paths";
import SolicitarCredito from "../../Pages/CirculoCredito/SolicitarCredito";

import React from "react";

export default function SolicitarPrestamoRoute() {
  const { tokenExist, verificationStep } = useAuthContext();
  console.log("Circulo credito route");

  if (!tokenExist) {
    return <Navigate to={LOGIN} />;
  }

  // if (verificationStep >= 4) {
  //     return (
  //         <div>
  //             <Navigate to={PRESTAMO_VERIFICACION} />
  //             <Verificacion />
  //         </div>
  //     )
  // }
  // if (verificationStep < 4) {
  //     return (
  //         <div>
  //             <Navigate to={PRESTAMO_SOLICITUD} />
  //             <Solicitar />
  //         </div>
  //     )
  // }

  return (
    <>
      <Navigate to={CIRCULO_CREDITO_VERIFICAR_DATOS} />
      <SolicitarCredito terminos={false} />
      {/* <Outlet /> */}
    </>
  );
}
