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
            step={10}
            marks={[
              {
                value: 20,
                label: "20%",
              },
              {
                value: 50,
                label: "50%",
              },
              {
                value: 80,
                label: "80%",
              },
            ]}
            startContent="$100,000"
            endContent="$1,000,000"
            defaultValue={20}
            className="max-w-md"
          />
          <hr/>
          <div className="flex justify-center space-x-10">
            <div id='Card 1' className="p-4 rounded-lg shadow-md">
              <div className="w-32 h-20 bg-blue-500 flex items-center justify-center rounded-md">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-500">Some description</p>
              </div>
            </div>
            <div id='Card 2' className="p-4 rounded-lg shadow-md">
              <div className="w-32 h-20 bg-red-500 flex items-center justify-center rounded-md">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-500">Some description</p>
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