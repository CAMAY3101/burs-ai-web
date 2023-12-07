import React from 'react'
import '../../Styles/QuieroInvertir.scss'
import simuladorpng from '../../Assets/QuieroInvertir/simulador.webp'

import { Slider } from "@nextui-org/react";

function Simulador() {
  const [value, setValue] = React.useState(500000); // Valor inicial para el Slider
  const porcentajes = {
    100000: 20,
    500000: 25, //Ejemplo (no es el valor real)
    750000: 33,
    1000000:33
  };

  //const rendimiento = (value * (porcentajes[value] / 100)).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
  const retornoTotal = (value + (value * (porcentajes[value] / 100))).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-center items-center md:px-5 mb-12 simulador-container'>
        <div id='simulador' className='w-full sm:px-4 lg:w-1/2 flex flex-col items-center py-14'>
          <div className='text-center mb-20'>
            <h1 className='rubik-Bold-36 text-dark-blue-50'>Simulador de inversión</h1>
            <p className='rubik-Medium-23 text-dark-blue-50'>Haz crecer tu dinero</p>
          </div>  
          <Slider
            size="md"
            onChangeEnd={setValue}
            showTooltip={true}
            marks={[
              {
                value: 250000,
                label: <div className='mt-1 rubik-Medium-8 text-purple-heart-200 md:text-[10px]'>$250,000</div>,
              },
              {
                value: 500000,
                label: <div className='mt-1 rubik-Medium-8 text-purple-heart-200 md:text-[10px]'>$500,000</div>
              },
              {
                value: 750000,
                label: <div className='mt-1 rubik-Medium-8 text-purple-heart-200 md:text-[10px]'>$750,000</div>
              },
            ]}
            minValue={100000}
            maxValue={1000000}
            step={50000}
            defaultValue={500000}
            formatOptions={{ style: "currency", currency: "MXN" }}
            className="max-w-sm md:max-w-xl mt-10"
            startContent= {<div className='rubik-Medium-10 text-purple-heart-200 md:text-[15px]'> $100,000 </div>}
            endContent={<div className='rubik-Medium-10 text-purple-heart-200 md:text-[15px]'> $1,000,000 </div>}
            color='secondary'
            tooltipProps={{
              closeDelay: 5000
            }}
          />
          <div className="flex justify-center space-x-16 md:space-x-52 mt-32">
            <div id='Card 1' className="">
              <div className="w-16 h-8 md:w-24 md:h-12 flex items-center justify-center py-5 rounded-xl md:rounded-2xl bg-persian-rose-50">
                <span className="rubik-Medium-13 md:text-[23px] text-purple-heart-900">{porcentajes[value]}%</span>
              </div>
              <div className="mt-4 text-center">
                <p className="rubik-Medium-12 md:text-[15px] text-dark-blue-50">de rendimiento</p>
              </div>
            </div>
            <div id='Card 2' className="">
              <div className="w-32 h-8 md:w-40 md:h-10 flex items-center justify-center py-5 rounded-xl md:rounded-2xl bg-persian-rose-50">
                <span className="rubik-Medium-13 md:text-[23px] text-purple-heart-900">{retornoTotal}</span>
              </div>
              <div className="mt-4 text-center">
                <p className="rubik-Medium-12 md:text-[15px] text-dark-blue-50">retorno total</p>
              </div>
            </div>
          </div>
        </div>

        <div id='image' className='w-full md:w-1/2 hidden lg:block'>
          <img src={simuladorpng} alt="Subcontainer 1" className="w-15 h-15" />
        </div>
      </div>
    </div>
  )
}

export default Simulador