import React from 'react'
import { Button, Slider } from "@nextui-org/react";
import axios from 'axios';
import { endpoint } from '../../Config/utils/urls';

const styles_slider = {
    startContent: [
        'font-rubik',
        'font-medium',
        'text-dark-blue-950',
        'text-sm',
    ],
    endContent: [
        'font-rubik',
        'font-medium',
        'text-dark-blue-950',
        'text-sm',
    ],
}

function SeleccionMonto() {
    const [ setValue] = React.useState(500000); // Valor inicial para el Slider
    
    async function handleSubmit() {
        try {
            await axios.post(endpoint.verificacion.sendOTPCodeEmail);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    return (
        <div className='sm:w-11/12 lg:w-5/12 space-y-5 '>
            <div id='simulador' className='w-full flex flex-col items-center py-14'>
                <div className='text-center mb-20'>
                    <h1 className='rubik-Bold-36 text-purple-600'>Monto pre aprobado por:</h1>
                </div>
                <Slider
                    size="md"
                    onChangeEnd={setValue}
                    showTooltip={true}
                    minValue={400}
                    maxValue={1000}
                    step={50}
                    defaultValue={500}
                    formatOptions={{ style: "currency", currency: "MXN" }}
                    className="max-w-sm md:max-w-xl mt-10"
                    classNames={styles_slider}
                    startContent= '$400'
                    endContent= '$1,000'
                    color='secondary'
                    tooltipProps={{
                        closeDelay: 5000
                    }}
                />
            </div>
            <Button
                color='secondary'
                className='w-full'
                onClick={handleSubmit}
            >
                Siguiente
            </Button>

        </div>

    )
}

export default SeleccionMonto