import React from 'react'
import '../../Styles/QuieroInvertir.scss'


function heroQI() {
  return (
    <div id='proceso'>
        <div className="bg-cover bg-center h-screen flex items-center justify-center px-10 mb-10 lg:justify-end md:px-10 lg:px-40 cover-hero-QI">
            <div className="flex flex-col justify-end text-center space-y-5 md:space-y-8">
                <h3 className='text-persian-rose-600 rubik-Bold-70 md:text-[110px]'>
                    INVIERTE<br />
                </h3>
                <h3 className='text-dark-blue-50 rubik-Bold-32 md:text-[50px]'>
                    Y VE CRECER <br />
                </h3>
                <h3 className='text-dark-blue-50 rubik-Bold-32 md:text-[50px]'>
                    TU DINERO <br />
                </h3>
                <h3 className='text-persian-rose-50 rubik-Bold-88'>
                    BURS
                </h3>
            </div>
        </div>
    </div>
  )
}

export default heroQI