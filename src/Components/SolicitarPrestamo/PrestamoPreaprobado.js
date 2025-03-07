import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuthContext } from "../../Contexts/authContext";
import TitlePage from "../CustomizeComponents/TitlePage";
import Button1 from '../CustomizeComponents/Button1.jsx'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function PrestamoPreaprobado() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="w-full max-w-lg flex flex-col space-y-6 mx-auto px-8 items-center text-center">
      <TitlePage title="Selecciona una fecha de pago" />

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          className="text-center p-2 border rounded-lg"
          inline
        />
      </div>

      <div className="text-left w-full">
        <p className="text-gray-700 font-semibold">
          Fecha de Pago: <span className="text-blue-700">{selectedDate.toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" })}</span>
        </p>
        <p className="text-gray-700 font-semibold">Interés total + IVA: <span className="text-black">$65</span></p>
        <p className="text-gray-700 font-semibold">Total a pagar: <span className="text-black">$315</span></p>
      </div>

      <Button1
        handleSubmit={handleSubmit(onSubmit)}
        label="Realizar solicitud"
      />
    </div>
  );
}

export default PrestamoPreaprobado;
