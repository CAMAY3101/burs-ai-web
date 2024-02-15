import React from 'react'
import { Input, Button } from "@nextui-org/react"

function VerificacionTelefono() {
  return (
      <div className='flex flex-col items-center space-y-14 mt-9'>
          <ol class="flex items-center w-11/12  space-x-4">
              <li class="flex items-center text-purple-heart-700/80 font-rubik font-medium text-sm">
                  <span class="flex items-center justify-center w-6 h-6 me-2 font-rubik font-medium text-sm text-dark-blue-50 bg-purple-heart-700/80 rounded-full shrink-0">
                      1
                  </span>
                  Registro <span class="hidden sm:inline-flex sm:ms-2">de Datos</span>
                  <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                  </svg>
              </li>
              <li class="flex items-center text-purple-heart-700/80 font-rubik font-medium text-sm">
                  <span class="flex items-center justify-center w-6 h-6 me-2 font-rubik font-medium text-sm text-dark-blue-50 bg-purple-heart-700/80 rounded-full shrink-0">
                      2
                  </span>
                  Verificación <span class="hidden sm:inline-flex sm:ms-2">de Datos</span>
                  <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                  </svg>
              </li>
              <li class="flex items-center text-purple-heart-200 font-rubik font-medium text-sm">
                  <span class="flex items-center justify-center w-6 h-6 me-2 font-rubik font-medium text-sm text-dark-blue-50 bg-purple-heart-200 rounded-full shrink-0">
                      3
                  </span>
                  Solicitar <span class="hidden sm:inline-flex sm:ms-2">Prestamo</span>
              </li>
          </ol>
          <div className='w-11/12 flex flex-col space-y-8'>
              <h1>Te enviamos un codigo al telefono XX XXXX XXXX</h1>
              <p>Ingresa el codigo OTP que te enviamos por SMS</p>
              <div className='flex-col space-y-4'>
                  <Input
                      label='Codigo OTP'
                      labelPlacement='outside'
                      placeholder='Ingresa el codigo'
                  />
                  <Button>Reenviar codigo</Button>
              </div>
          </div>
          <div className='w-11/12'>
              <Button
                  className='w-full'
              >
                  Verficar Telefono
              </Button>
          </div>


      </div>
  )
}

export default VerificacionTelefono