import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import Button1 from "../CustomizeComponents/Button1";
import toast, { Toaster } from "react-hot-toast";
import { PINInputBox } from "./PINInputBox";
import {
  useGetTerminosCondiciones,
  useGetSolicitersDataAndAddress,
} from "../../hooks/useQueryHooks";

export const StepperCirculoCredito = () => {
  const [step, setStep] = useState(1); // Paso actual
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellidos: "",
    edad: "",
    telefono: "",
    correo: "",
    calle: "",
    numero_exterior: "",
    numero_interior: "",
    colonia: "",
    cp: "",
    municipio: "",
    estado: "",
    tipo_vivienda: "",
  });
  const [aceptoTerminos, setAceptoTerminos] = useState(false);
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    data: terminos_condiciones,
    refetch: refetch_terminos_condiciones,
    isFetching,
  } = useGetTerminosCondiciones();

  const { data: datos_solicitante } = useGetSolicitersDataAndAddress();

  useEffect(() => {
    if (datos_solicitante?.data?.data) {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        ...datos_solicitante.data.data,
      }));
    } else {
      console.error("datos_solicitante.data.data is undefined");
    }
  }, [datos_solicitante]);

  const handleContinue = async () => {
    if (step === 1) {
      // Validar campos obligatorios
      if (
        !userInfo.nombre ||
        !userInfo.apellidos ||
        !userInfo.telefono ||
        !userInfo.correo ||
        !userInfo.calle ||
        !userInfo.numero_exterior ||
        !userInfo.colonia ||
        !userInfo.cp ||
        !userInfo.municipio ||
        !userInfo.estado ||
        !userInfo.tipo_vivienda
      ) {
        toast("Por favor, completa todos los campos obligatorios.");
        return;
      }

      await refetch_terminos_condiciones(); // Ejecutar el query cuando demos click
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep(2); // Pasar al paso 2 (PIN y términos)
      }, 2000); // Simular carga de 2 segundos
      return;
    }

    if (step === 2) {
      if (aceptoTerminos && pin) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setStep(3); // Pasar al paso 3 (Evaluación)
        }, 2000); // Simular carga de 2 segundos
      } else {
        toast("Por favor, acepta los términos e ingresa el PIN");
      }
    }

    if (step === 3) {
      toast("Solicitud enviada correctamente");
      // Aquí podrías enviar la solicitud al backend
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1); // Regresar al paso anterior
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Toaster />
      <div className="md:w-1/2 lg:w-10/12 flex flex-col items-center space-y-14 mr-8 ml-8">
        {/* Stepper con iconos de Material Icons */}
        <div className="w-full max-w-md mb-8">
          <div className="flex justify-center space-x-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex items-center space-x-2 ${
                  step === s ? "text-purple-700" : "text-gray-400"
                }`}
              >
                <i className="material-icons">
                  {s === 1 ? "person" : s === 2 ? "lock" : "access_time"}
                </i>
                <span className="text-sm font-medium">
                  {s === 1
                    ? "Datos y Domicilio"
                    : s === 2
                      ? "PIN"
                      : "Evaluación"}
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
                {/* Datos personales */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={userInfo.nombre}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, nombre: e.target.value })
                    }
                    className="w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    placeholder="Apellidos"
                    value={userInfo.apellidos}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, apellidos: e.target.value })
                    }
                    className="w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    placeholder="Teléfono"
                    value={userInfo.telefono}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, telefono: e.target.value })
                    }
                    className="w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={userInfo.correo}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, correo: e.target.value })
                    }
                    className="w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>

                {/* Domicilio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Calle
                  </label>
                  <input
                    type="text"
                    placeholder="Calle"
                    value={userInfo.calle}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, calle: e.target.value })
                    }
                    className="w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Número exterior
                  </label>
                  <input
                    type="text"
                    placeholder="Número exterior"
                    value={userInfo.numero_exterior}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        numero_exterior: e.target.value,
                      })
                    }
                    className="w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Número interior (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Número interior"
                    value={userInfo.numero_interior}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        numero_interior: e.target.value,
                      })
                    }
                    className="w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Colonia
                  </label>
                  <input
                    type="text"
                    placeholder="Colonia"
                    value={userInfo.colonia}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, colonia: e.target.value })
                    }
                    className="w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Código postal
                  </label>
                  <input
                    type="text"
                    placeholder="Código postal"
                    value={userInfo.cp}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, cp: e.target.value })
                    }
                    className="w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Municipio
                  </label>
                  <input
                    type="text"
                    placeholder="Municipio"
                    value={userInfo.municipio}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, municipio: e.target.value })
                    }
                    className="w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Estado
                  </label>
                  <input
                    type="text"
                    placeholder="Estado"
                    value={userInfo.estado}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, estado: e.target.value })
                    }
                    className="w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Tipo de vivienda
                  </label>
                  <input
                    type="text"
                    placeholder="Tipo de vivienda"
                    value={userInfo.tipo_vivienda}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        tipo_vivienda: e.target.value,
                      })
                    }
                    className="w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>

                <Button1
                  handleSubmit={handleContinue}
                  label={isLoading ? "Enviando..." : "Continuar"}
                  disabled={isLoading}
                />
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
              <section id="terminos_condiciones">
                {isFetching && <div>cargando...</div>}
                {!isFetching &&
                  terminos_condiciones?.data?.data?.map((terminos) => (
                    <div key={terminos.titulo}>
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
                            onChange={(e) =>
                              setAceptoTerminos(e.target.checked)
                            }
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
                    </div>
                  ))}
              </section>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Evaluando solicitud{" "}
                <i className="material-icons animate-spin">access_time</i>
              </h2>
              <p className="text-gray-700">
                Tu solicitud está siendo evaluada actualmente, espera un
                momento.
              </p>
              <div className="mt-6">
                <Button1
                  handleSubmit={handleContinue}
                  label={
                    <i className="material-icons animate-spin">access_time</i>
                  }
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
