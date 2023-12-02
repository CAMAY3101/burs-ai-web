import React from 'react'
import '../../Styles/QuieroInvertir.scss'
import simuladorpng from '../../Assets/QuieroInvertir/simulador.webp'

import { Slider } from "@nextui-org/react";

function Simulador() {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-center items-center px-5 simulador-container'>
        <div id='simulador' className='w-full md:w-1/2 flex flex-col items-center py-14'>
          <div className='text-center mb-20'>
            <h1 className='rubik-Bold-36 title-simulador'>Simulador de inversión</h1>
            <p className='rubik-Medium-23 subtitle-simulador'>Haz crecer tu dinero</p>
          </div>  
          <Slider
            size="md"
            showTooltip={true}
            marks={[
              {
                value: 250000,
                label: <div className='mt-1 rubik-Regular-13 min-simulador'>$250,000</div>,
              },
              {
                value: 500000,
                label: <div className='mt-1 rubik-Regular-13 min-simulador'>$500,000</div>
              },
              {
                value: 750000,
                label: <div className='mt-1 rubik-Regular-13 min-simulador'>$750,000</div>
              },
            ]}
            minValue={100000}
            maxValue={1000000}
            step={50000}
            defaultValue={500000}
            formatOptions={{ style: "currency", currency: "MXN" }}
            className="max-w-xl mt-10"
            startContent= {<div className='rubik-Medium-15 min-simulador'> $100,000 </div>}
            endContent={<div className='rubik-Medium-15 min-simulador'> $1,000,000 </div>}
            color='secondary'
            tooltipProps={{
              closeDelay: 5000
            }}
          />
          <div className="flex justify-center space-x-52 mt-32">
            <div id='Card 1' className="">
              <div className="w-17 h-10 flex items-center justify-center py-5 rounded-2xl card-simulador">
                <span className="rubik-Medium-23 text-card-simulador">25%</span>
              </div>
              <div className="mt-4 text-center">
                <p className="rubik-Medium-15 subtext-card-simulador">de rendimiento</p>
              </div>
            </div>
            <div id='Card 2' className="">
              <div className="w-40 h-10 bg-red-500 flex items-center justify-center py-5 rounded-2xl card-simulador">
                <span className="rubik-Medium-23 text-card-simulador">$125,000</span>
              </div>
              <div className="mt-4 text-center">
                <p className="rubik-Medium-15 subtext-card-simulador">retorno total</p>
              </div>
            </div>
          </div>
        </div>

        <div id='image' className='w-full md:w-1/2 hidden md:block'>
          <img src={simuladorpng} alt="Subcontainer 1" className="w-15 h-15" />
        </div>
      </div>
    </div>
  )
}

export default Simulador