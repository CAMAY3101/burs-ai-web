import React from 'react'
import { Button } from '@nextui-org/react'

import underConstruction from '../../Assets/icons/under_construction.png'
import axios from 'axios'
import { useAuthContext } from '../../Contexts/authContext'


function VerificacionIdentidad() {
  const { navigateToNextStep } = useAuthContext()
  async function handleSubmit() {
    try {
      const response = await axios.post('https://bursapi.com/verificacion/verifyIdentity')

      if(response.data.status === 'success') {
        navigateToNextStep(7)
      }

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='flex flex-col items-center space-y-3'>
      <h2 className=' font-rubik text-md text-dark-blue-900 '>Verificacion de Identidad</h2>
      <img src={underConstruction} alt="Under Construction" />
      <div className='flex flex-col space-y-1 justify-center items-center'>
        <p className=' font-rubik text-sm text-dark-blue-900 '>Esta sección está en construcción</p>
        <p className=' font-rubik text-xs text-dark-blue-900 '>Por favor, presiona el botón de continuar para seguir con el proceso</p>
      </div>
      <Button onClick={handleSubmit}> Continuar </Button>
    </div>
  )
}

export default VerificacionIdentidad