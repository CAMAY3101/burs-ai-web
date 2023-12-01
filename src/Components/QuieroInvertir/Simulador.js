import React from 'react'
import '../../Styles/QuieroInvertir.scss'
import simuladorpng from '../../Assets/QuieroInvertir/simulador.webp'

import { Slider } from "@nextui-org/react";

function Simulador() {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-center simulador-container'>
        <div id='simulador' className='w-full md:w-1/2 flex flex-col items-center py-14 space-y-14'>
          <div className='text-center'>
            <h1 className='text-white'>Simulador</h1>
            <p>Haz crecer tu dinero</p>
          </div>  
          <Slider
            color="foreground"
            size="sm"
            showTooltip={true}
            marks={[
              {
                value: 250000,
                label: "$250,000",
              },
              {
                value: 500000,
                label: "$500,000",
              },
              {
                value: 750000,
                label: "$750,000",
              },
            ]}
            minValue={100000}
            maxValue={1000000}
            step={100000}
            startContent="$100,000"
            endContent="$1,000,000"
            formatOptions={{ style: "currency", currency: "MXN" }}
            className="max-w-xl"
          />
          <hr/>
          <div className="flex justify-center space-x-40">
            <div id='Card 1' className="">
              <div className="w-32 h-20 bg-blue-500 flex items-center justify-center rounded-md">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-500">de rendimiento</p>
              </div>
            </div>
            <div id='Card 2' className="">
              <div className="w-32 h-20 bg-red-500 flex items-center justify-center rounded-md">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-500">retorno total</p>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div id = 'image' className='w-full md:w-1/2'>
          <img src={simuladorpng} alt="Subcontainer 1" className="w-15 h-15" />
        </div>
      </div>
    </div>
  )
}

export default Simulador