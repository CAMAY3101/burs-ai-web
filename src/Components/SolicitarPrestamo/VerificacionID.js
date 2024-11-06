import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'

import pendingIcon from '../../Assets/icons/pending-icon.png'
import axios from 'axios'
import { useAuthContext } from '../../Contexts/authContext'
import { endpoint } from '../../Config/utils/urls'

function VerificacionID() {
    const { navigateToNextStep } = useAuthContext()
    const [existInFAD, setExistInFAD] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const VerifyUserInFAD = async () => {
            try {
                const response = await axios.get(endpoint.FAD.getUserInFAD);
                if (response.data.status === 'success') {
                    if (response.data.exist === null) {
                        setExistInFAD(false)
                    } else {
                        setExistInFAD(true)
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }

        const SendFAD = async () => {
            try {
                const response = await axios.post(endpoint.FAD.generateToken);
                if (response.data.status === 'success') {
                    const validation = await axios.post(endpoint.FAD.createValidation);
                    if (validation.data.status ==='success') {
                        setMessage('Te enviamos una invitacion a tu correo electronico para validar tu INE e identidad. Revisa tu bandeja de entrada o spam')
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }

        const getValidationStatus = async () => {
            try {
                const response = await axios.post(endpoint.FAD.generateToken);
                if (response.data.status === 'success') {
                    const validationStep = await axios.get(endpoint.FAD.getValidationStep);
                    console.log('validation step: ', validationStep.data)
                    if (validationStep.data.status ==='success') {
                        navigateToNextStep(7)
                    } else if (validationStep.data.status === 'in progress') {
                        setMessage(validationStep.data.message)
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }

        VerifyUserInFAD()

        if (existInFAD === null) {
            SendFAD()
        } else {
            getValidationStatus()
        }

    }, [existInFAD, navigateToNextStep]);

  return (
    <div className='w-1/3 flex flex-col items-center space-y-10'>
        <h2 className=' font-rubik text-2xl text-dark-blue-900 '>Verificacion de INE e Identidad</h2>
        <img src={pendingIcon} alt="Under Construction" className='w-2/4'/>
        <p className='font-rubik text-lg text-dark-blue-900 justify-center'>{message}</p>
    </div>
  )
}

export default VerificacionID