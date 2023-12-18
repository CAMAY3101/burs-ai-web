import React from 'react'
import simuladorpng from '../../Assets/QuieroInvertir/simulador.webp'

function Retorno() {
  return (
    <div >
        <div className='flex flex-col lg:flex-row justify-center items-center md:px-5 mb-12 simulador-container'>
            <div id='simulador' className='w-full px-4 lg:w-1/2 flex flex-col  py-14 space-y-4'>
                <h2 className='rubik-Medium-18 text-persian-rose-50 md:text-2xl'>Te damos transparencia y <span className='text-dark-blue-300'>claridad</span></h2>
                <h3 className='rubik-Medium-12 text-purple-heart-50 md:text-lg'>Tasa de Rendimiento Anual Fija <span className='text-persian-rose-200'>15%</span></h3>
                <h4 className='rubik-Medium-12 text-persian-rose-100 md:text-lg'>La Ganancia Anual Total (GAT)</h4>
                <div>
                  <h5 className='rubik-Medium-12 text-persian-rose-50 md:text-lg'>GAT Nominal <span className='text-dark-blue-300'>16.18%</span>  sin IVA</h5>
                  <h5 className='rubik-Regular-9 text-dark-blue-50 md:text-xs'>La GAT Nominal es el porcentaje de rendimiento antes de impuestos</h5>
                </div>
                <div>
                  <h5 className='rubik-Medium-12 text-purple-heart-50 md:text-lg'>GAT Real <span className='text-dark-blue-300'>11.57%</span></h5>
                  <h5 className='rubik-Regular-9 text-dark-blue-50 md:text-xs'>La GAT Real es el rendimiento que obtendría después de descontar la inflación estimada</h5>
                </div>
                <p className='rubik-Regular-8 text-dark-blue-100 md:text-[11px]'>
                  Valores calculados el 30 de Octubre de 2023. Monto mínimo de ahorro $0.01 Vigencia al 15 de abril de 2024. Producto garantizado por el Fondo de Protección hasta por 25,000 UDIs.
                  <br/>
                  El rendimiento diario únicamente se genera sobre el saldo en cualquier "Cajita" que tengas activada. Consulta Términos y Condiciones.
                </p>
            </div>

            <div id='image' className='w-full md:w-1/2 hidden lg:block'>
                <img src={simuladorpng} alt="Subcontainer 1" className="w-15 h-15" />
            </div>
        </div>
    </div >
  )
}

export default Retorno