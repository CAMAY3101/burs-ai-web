import React, { useState } from 'react';
import { RadioGroup, Radio, Input, Tooltip, Card, CardHeader, Image, Select, SelectItem } from "@heroui/react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useAuthContext } from "../../Contexts/authContext";
import { Button } from "@heroui/react";

function DatosDeposito() {
  const { navigateToNextStep } = useAuthContext();
  const [selectedOption, setSelectedOption] = useState('');

  const bancos = [
    { key: "cat", label: "BBVA" },
    { key: "dog", label: "Santander" },
    { key: "elephant", label: "HSBC" },
    { key: "lion", label: "Banregio" },
  ];

  const onSubmit = () => {
    navigateToNextStep(8);
  };
  return (
    <div className='w-full max-w-lg flex-col space-y-8 '>
      <Card className="">
        <CardHeader className="flex gap-3">
          <Image
            alt="heroui logo"
            width={70}
            radius="sm"
            src="https://i.imghippo.com/files/SPC8149SK.webp"
          />
          <div className="flex flex-col mt-4">
            <p className="text-base font-rubik font-medium text-dark-blue-900">¡Felidades! Estás Preaprobado por un crédito</p>
            <p className="text-small font-rubik">Tu préstamo casi está aprobado, solo necesitamos un poco más de información</p>
          </div>
        </CardHeader>
      </Card>
      <div>
      <p className="font-rubik font-normal text-2xl text-dark-blue-900">Datos de depósito</p>
      <p className="font-rubik font-regular text-sm text-dark-blue-500">Para depositarte, la cuenta bancaria que proporciones debe estar a tu nombre.</p>
      </div>


      <RadioGroup label="Selecciona tu forma de deposito" value={selectedOption} onValueChange={setSelectedOption}>
        <Radio value="tarjeta">Tarjeta de débito</Radio>
        <Radio value="clabe">Transferencia Interbancaria (Clabe)</Radio>
      </RadioGroup>

      {selectedOption === 'tarjeta' && (
        <div className='flex-col space-y-3'>
          <h1> Ingresa el número de tu tarjeta</h1>
          <div className='flex items-center'>
            <Input className='w-11/12' label="16 digitos" variant="bordered" color="secondary" />
            <Tooltip
              color="default"
              content="Nota: Los 16 números se encuentran en la parte frontal de tu tarjeta de débito 😉"
            >
              <div>
                <IoMdInformationCircleOutline />
              </div>
            </Tooltip>
          </div>
          <Select className="w-11/12" label="Selecciona tu banco" variant="bordered" color="secondary">
            {bancos.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
        </div>
      )}

      {selectedOption === 'clabe' && (
        <div className='flex-col space-y-3'>
          <h1> Ingresa tu clabe interbancaria</h1>
          <Input className='w-11/12' label="18 digitos" variant="bordered" color="secondary" />
          <Select className="w-full" label="Selecciona tu banco" variant="bordered" color="secondary">
            {bancos.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
        </div>
      )}

      <Button
        onPress={onSubmit}
        size="md"
        color="secondary"
        className="w-full"
      >
        Continuar
      </Button>
    </div>

  )
}

export default DatosDeposito