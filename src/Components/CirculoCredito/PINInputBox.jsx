import React from "react";
import { Button } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";

export const PINInputBox = ({ value, handlePINInput }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[720px] mx-auto">
        <div className="w-full max-w-sm min-w-[200px]">
          <label className="block mb-1 text-sm text-slate-800">
            Ingresa tu código PIN
          </label>
          <input
            className="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="PIN 4 dígitos (1234)"
            pattern="^\d{4}$"
            maxLength="4"
            value={value}
            onChange={(e) => handlePINInput(e.target.value)}
          />

          <p className="flex items-center mt-2 text-xs text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-slate-400"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            El PIN fue enviado a tu correo/número de teléfono.
          </p>
        </div>
        <Button
          onClick={() => {
            toast("Coodigo re-enviado.", "succcess");
          }}
          variant="light"
          className="px-0 font-rubik font-medium text-xs text-purple-heart-700 data-[hover=true]:bg-default/0"
        >
          Reenviar
        </Button>
      </div>
    </div>
  );
};
