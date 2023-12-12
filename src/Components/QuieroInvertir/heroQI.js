import React from 'react'
import '../../Styles/QuieroInvertir.scss'


function heroQI() {
  return (
    <div id='proceso'>
        <div className="bg-cover bg-center h-screen flex items-center justify-center px-10 mb-10 lg:justify-end md:px-10 lg:px-40 cover-hero-QI">
            <div className="flex flex-col justify-end text-center space-y-5 md:space-y-10">
                  <h3 className='bg-persian-rose-600/60 text-persian-rose-100 rubik-ExtraBold-70 tracking-wider md:text-[95px]'>
                    INVIERTE<br />
                </h3>
                <h3 className='text-dark-blue-50 rubik-ExtraBold-32 tracking-wider md:text-[50px]'>
                    Y VE CRECER <br />
                </h3>
                <h3 className='text-dark-blue-50 rubik-ExtraBold-32 tracking-wider md:text-[50px]'>
                    TU DINERO <br />
                </h3>
                <h3 className='text-persian-rose-50 rubik-ExtraBold-88 tracking-wider md:text-[105px]'>
                    BURS
                </h3>
            </div>
        </div>
    </div>
  )
}

export default heroQI