import React, { useState } from "react";
import { useAuthContext } from "../../Contexts/authContext";
import { Button, Slider } from "@heroui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function PrestamoPreaprobado() {
  const { navigateToNextStep } = useAuthContext();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [amount, setAmount] = useState(1000)

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

    navigateToNextStep(7);

    
  };

  return (
    <div className="w-full max-w-lg flex flex-col space-y-6 mx-auto px-8 items-start text-center">
      <p className='font-rubik font-regular text-lg text-dark-blue-900'>Fuiste Aprobado para un préstamo de hasta <span className='font-bold'>$1000</span></p>
      <Slider
        className="max-w-md"
        color="secondary"
        defaultValue={1000}
        label="Selecciona un monto"
        maxValue={1000}
        minValue={500}
        step={50}
        onChangeEnd={setAmount}
      />
      <div className="bg-white p-4 rounded-lg shadow-lg justify-center">
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
        <p className="text-gray-700 font-semibold">Interés total + IVA: <span className="text-black">$0</span></p>
        <p className="text-gray-700 font-semibold">Total a pagar: <span className="text-black">${amount}</span></p>
      </div>

      <Button
        onPress={onSubmit}
        size="md"
        color="secondary"
        className="w-full"
      >
        Realizar Solicitud
      </Button>

      <p>Tasa fija anual simple 0.0% CAT promedio 0.0%</p>
    </div>
  );
}

export default PrestamoPreaprobado;
