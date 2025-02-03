import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import Button1 from "../CustomizeComponents/Button1";
import toast, { Toaster } from "react-hot-toast";
import { PINInputBox } from "./PINInputBox";
import { useGetTerminosCondiciones } from "../../hooks/useQueryHooks";

export const StepperCirculoCredito = () => {
  const [step, setStep] = useState(1); // Paso actual
  const [userInfo, setUserInfo] = useState({
    nombreCompleto: "Juan Pérez",
    curp: "ABCD123456EFGH78",
    telefono: "5551234567",
    correo: "juan@ejemplo.com",
    calleNumero: "Calle Falsa 123",
    colonia: "Centro",
    ciudad: "Ciudad de México",
    entidadFederativa: "CDMX",
    codigoPostal: "12345",
  });
  const [aceptoTerminos, setAceptoTerminos] = useState(false);
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    data: terminos_condiciones,
    refetch: refetch_terminos_condiciones,
    isFetching,
  } = useGetTerminosCondiciones();

  const handleContinue = async () => {
    if (
      step === 1 &&
      (!userInfo.nombreCompleto ||
        !userInfo.curp ||
        !userInfo.telefono ||
        !userInfo.correo)
    ) {
      toast("Por favor, completa todos los campos de datos personales.");
      return;
    }
    if (
      step === 2 &&
      (!userInfo.calleNumero ||
        !userInfo.colonia ||
        !userInfo.ciudad ||
        !userInfo.entidadFederativa ||
        !userInfo.codigoPostal)
    ) {
      toast("Por favor, completa todos los campos de domicilio.");
      return;
    }
    if (step === 2) {
      await refetch_terminos_condiciones(); // Ejecutar el query cuando demos click
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep(3); // Pasar al paso 3 después de simular el envío del NIP
      }, 2000); // Simular carga de 2 segundos
      return;
    }
    if (step === 3) {
      if (aceptoTerminos && pin) {
        toast("Solicitud enviada correctamente");
        //   handleContinue();
      } else {
        toast("Por favor, acepta los términos e ingresa el PIN");
        throw new Error("No esta el pin o los terminos");
      }
    }
    setStep(step + 1); // Pasar al siguiente paso
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1); // Regresar al paso anterior
    }
  };

  //   const handleSubmit = () => {
  //     // toast("Procesando tu solicitud.", "success");
  //     if (aceptoTerminos && pin) {
  //       toast("Solicitud enviada correctamente");
  //     //   handleContinue();
  //     } else {
  //       toast("Por favor, acepta los términos e ingresa el PIN");
  //     }
  //   };

  return (
    <div className="flex flex-col items-center">
      <Toaster />
      <div className="md:w-1/2 lg:w-10/12 flex flex-col items-center space-y-14 mr-8 ml-8">
        {/* Stepper con iconos de Material Icons */}
        <div className="w-full max-w-md mb-8">
          <div className="flex justify-center space-x-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`flex items-center space-x-2 ${
                  step === s ? "text-purple-700" : "text-gray-400"
                }`}
              >
                <i className="material-icons">
                  {s === 1
                    ? "person"
                    : s === 2
                      ? "home"
                      : s === 3
                        ? "lock"
                        : s === 4
                          ? "email"
                          : "check_circle"}
                </i>
                <span className="text-sm font-medium">
                  {s === 1
                    ? "Datos"
                    : s === 2
                      ? "Domicilio"
                      : s === 3
                        ? "PIN"
                        : s === 4
                          ? "Enviada"
                          : "Resultados"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contenido del paso actual */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          {step === 1 && (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Confirma tu información
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nombre completo
                  </label>
                  <p className="mt-1 p-2 bg-gray-100 rounded-md">
                    {userInfo.nombreCompleto}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    CURP
                  </label>
                  <p className="mt-1 p-2 bg-gray-100 rounded-md">
                    {userInfo.curp}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <p className="mt-1 p-2 bg-gray-100 rounded-md">
                    {userInfo.telefono}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <p className="mt-1 p-2 bg-gray-100 rounded-md">
                    {userInfo.correo}
                  </p>
                </div>
                <Button1 handleSubmit={handleContinue} label="Continuar" />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="flex items-center justify-between mb-6">
                <Button
                  onClick={handleBack}
                  variant="light"
                  className="px-0 font-rubik font-medium text-xs text-purple-heart-700 data-[hover=true]:bg-default/0"
                >
                  {"<- regresar"}
                </Button>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Domicilio
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Calle y número"
                  value={userInfo.calleNumero}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, calleNumero: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Colonia"
                  value={userInfo.colonia}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, colonia: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Ciudad"
                  value={userInfo.ciudad}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, ciudad: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Entidad federativa"
                  value={userInfo.entidadFederativa}
                  onChange={(e) =>
                    setUserInfo({
                      ...userInfo,
                      entidadFederativa: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Código postal"
                  value={userInfo.codigoPostal}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, codigoPostal: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                />
                <Button1
                  handleSubmit={handleContinue}
                  label={isLoading ? "Enviando..." : "Continuar"}
                  disabled={isLoading}
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="flex items-center justify-between mb-6">
                <Button
                  onClick={handleBack}
                  variant="light"
                  className="px-0 font-rubik font-medium text-xs text-purple-heart-700 data-[hover=true]:bg-default/0"
                >
                  {"<- regresar"}
                </Button>
              </div>
              <section id="terminos_condiciones">
                {isFetching && <div>cargando...</div>}
                {!isFetching &&
                  terminos_condiciones.data.data &&
                  terminos_condiciones.data.data.map((terminos) => {
                    return (
                      <>
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-2xl font-bold text-gray-800">
                            {terminos.titulo}
                          </h2>
                        </div>
                        <div className="space-y-4">
                          <div className="h-48 overflow-y-auto p-4 bg-gray-100 rounded-md">
                            <p className="text-sm text-gray-700">
                              {terminos.contenido}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="aceptoTerminos"
                              checked={aceptoTerminos}
                              onChange={(e) => {
                                setAceptoTerminos(e.target.checked);
                              }}
                              className="mr-2"
                            />
                            <label
                              htmlFor="aceptoTerminos"
                              className="text-sm text-gray-700"
                            >
                              Acepto los términos y condiciones
                            </label>
                          </div>
                          <div>
                            <PINInputBox value={pin} handlePINInput={setPin} />
                          </div>
                          <Button1
                            handleSubmit={handleContinue}
                            label="Enviar solicitud"
                          />
                        </div>
                      </>
                    );
                  })}
              </section>
              {/* <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Ingresar PIN
              </h2>
              <div className="space-y-4">
                <PINInputBox value={pin} handlePINInput={setPin} />
                <Button1 handleSubmit={handleSubmit} label="Enviar solicitud" />
              </div> */}
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Solicitud enviada
              </h2>
              <p className="text-gray-700">
                Tu solicitud de revisión de aprobación de crédito fue enviada
                con éxito. Vuelve aquí más tarde para verificar los resultados.
              </p>
              <div className="mt-6">
                <Button1 handleSubmit={handleContinue} label="Continuar" />
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Resultados de aprobación
              </h2>
              <p className="text-gray-700">
                Resultados de la aprobación del crédito por parte de Círculo de
                Crédito.
              </p>
              <div className="align-middle text-center">
                <p className="text-gray-700 mt-4 align-middle">
                  Descargar resultados.
                </p>
                <i className="material-icons">download</i>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
