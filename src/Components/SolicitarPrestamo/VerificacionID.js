import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'

import pendingIcon from '../../Assets/icons/pending-icon.png'
import axios from 'axios'
import { useAuthContext } from '../../Contexts/authContext'
import { endpoint } from '../../Config/utils/urls'

function VerificacionID() {
    const { navigateToNextStep, accessTokenExist } = useAuthContext()
    const [message, setMessage] = useState('Te enviamos una invitacion a tu correo electronico para validar tu INE e identidad. Revisa tu bandeja de entrada o spam')

    const getValidationStatus = async () => {
        try {
            if (accessTokenExist) {
                const validationStep = await axios.get(endpoint.FAD.getValidationStep);
                if (validationStep.data.status === 'success') {
                    navigateToNextStep(7);
                } else if (validationStep.data.status === 'in progress') {
                    setMessage(validationStep.data.message);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getValidationStatus();

    }, []);

  return (
    <div className='w-1/3 flex flex-col items-center space-y-10'>
        <h2 className=' font-rubik text-2xl text-dark-blue-900 '>Verificacion de INE e Identidad</h2>
        <img src={pendingIcon} alt="Under Construction" className='w-2/4'/>
        <p className='font-rubik text-lg text-dark-blue-900 justify-center'>{message}</p>
    </div>
  )
}

export default VerificacionID