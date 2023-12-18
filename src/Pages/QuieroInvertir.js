import React from 'react'

import HeroQI from '../Components/QuieroInvertir/heroQI'
import Invertir from '../Components/QuieroInvertir/Invertir'
import Simulador from '../Components/QuieroInvertir/Simulador'
import Retorno from '../Components/QuieroInvertir/Retorno'
import Form from '../Components/QuieroInvertir/Form'

function QuieroInvertir() {
  return (
    <div>
      <HeroQI />
      <Invertir />
      {/*<Simulador />*/}
      <Retorno />
      {/*<Form />*/}
    </div>
  )
}

export default QuieroInvertir