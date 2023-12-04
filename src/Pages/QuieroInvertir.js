import React from 'react'

import HeroQI from '../Components/QuieroInvertir/heroQI'
import Invertir from '../Components/QuieroInvertir/Invertir'
import Simulador from '../Components/QuieroInvertir/Simulador'
import Form from '../Components/QuieroInvertir/Form'

function QuieroInvertir() {
  return (
    <div>
      <HeroQI />
      <Invertir />
      <Simulador />
      <Form />
    </div>
  )
}

export default QuieroInvertir