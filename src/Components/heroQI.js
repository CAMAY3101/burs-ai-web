import React from 'react'
import '../Styles/Landing.scss'
 // "mb-4 text-center" || "mb-8 text-center" mb-number choose the margin bottom

function heroQI() {
  return (
    <div id='proceso'>
        <div className="bg-cover bg-center h-screen flex items-center justify-end Portada">
            <div className="flex flex-col md:flex-row justify-end">
                <div className="p-10">
                    <div className="mb-10 text-center">
                        <span className="titleHero rubik-Bold-36">
                            Recibe tu préstamo
                        </span>
                        <span className="titleHero rubik-Bold-36">
                            <br />
                        </span>
                        <span className="titleHeroCenter rubik-Bold-45">
                            seguro y en minutos
                        </span>
                        <span className="titleHeroCenter rubik-Bold-45">
                            <br />
                        </span>
                        <span className="titleHero rubik-Bold-36">
                            en solo 3 pasos
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default heroQI