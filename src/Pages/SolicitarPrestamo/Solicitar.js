import React from "react";
import NavbarLoan from "../../Components/SolicitarPrestamo/NavbarLoan";

import IngresaTusDatos from "../../Components/SolicitarPrestamo/IngresaTusDatos";
import TuHistorial from "../../Components/SolicitarPrestamo/TuHistorial";
import IngresaTuDomicilio from "../../Components/SolicitarPrestamo/IngresaTuDomicilio";
import { useAuthContext } from "../../Contexts/authContext";

const steps = [
  { id: 1, label: "Datos", sublabel: "Personales" },
  { id: 2, label: "Historial", sublabel: "Crediticio" },
  { id: 3, label: "Domicilio", sublabel: "Actual" },
];

function Solicitar() {
  const { verificationStep } = useAuthContext();

  return (
    <div>
      <NavbarLoan />
      <div className="flex flex-col items-center">
        <div className="md:w-1/2 lg:w-10/12 flex flex-col items-center space-y-14 mr-8 ml-8">
          <h1 className="text-dark-blue-900 font-rubik font-bold text-2xl">Solicitud de tu Credito Burs</h1>
          <ol
            id="progress bar"
            className="flex items-center justify-center lg:justify-around space-x-10 md:space-x-5 max-w-[700px]"
          >
            {steps.map((step, index) => {
              const isActive = step.id === verificationStep;
              const isCompleted = step.id < verificationStep;

              return (
                <li
                  key={step.id}
                  className={`flex items-center font-rubik font-regular text-xs sm:text-sm ${
                    isActive ? "text-dark-blue-700" : isCompleted ? "text-dark-blue-400" : "text-dark-blue-200"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 me-2 sm:me-3 font-rubik font-medium text-xs sm:text-sm lg:text-base rounded-full border-1 ${
                      isCompleted
                        ? "border-dark-blue-700 bg-dark-blue-700 text-white"
                        : isActive
                        ? "border-dark-blue-700 bg-white text-dark-blue-700"
                        : "border-dark-blue-950/50 bg-dark-blue-100 text-dark-blue-950/30"
                    }`}
                  >
                    {step.id}
                  </span>
                  {step.label} <span className="hidden lg:inline-flex lg:ms-2">{step.sublabel}</span>
                  {index !== steps.length - 1 && (
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 ms-2 sm:ms-4 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 12 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="m7 9 4-4-4-4M1 9l4-4-4-4"
                      />
                    </svg>
                  )}
                </li>
              );
            })}
          </ol>

          {verificationStep === 1 && <IngresaTusDatos />}
          {verificationStep === 2 && <TuHistorial />}
          {verificationStep === 3 && <IngresaTuDomicilio />}
        </div>
      </div>
    </div>
  );
}

export default Solicitar;
