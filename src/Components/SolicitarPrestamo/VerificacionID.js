import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'

import pendingIcon from '../../Assets/icons/pending-icon.png'
import axios from 'axios'
import { useAuthContext } from '../../Contexts/authContext'
import { endpoint } from '../../Config/utils/urls'


import TitlePage from '../CustomizeComponents/TitlePage';

function VerificacionID() {
    const { navigateToNextStep, accessTokenExist } = useAuthContext()
    const [message, setMessage] = useState('Te enviamos una invitación a tu correo electrónico para validar tu INE e identidad. Revisa tu bandeja de entrada o spam.')

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
        <TitlePage title="Verificación de INE e Identidad"/>
        <img src={pendingIcon} alt="Under Construction" className='w-2/4'/>
        <p className='font-rubik text-md text-dark-blue-950 justify-center'>{message}</p>
    </div>
  )
}

export default VerificacionID