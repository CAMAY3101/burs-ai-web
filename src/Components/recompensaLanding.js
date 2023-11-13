import React from 'react'
import '../Styles/Landing.scss'

function recompensaLanding() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center Recompensa">
            <h1 className="text-4xl font-bold mb-8 text-center">Welcome to our Website</h1>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col items-center mx-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                        <img src="https://source.unsplash.com/random" alt="Icon" className="w-8 h-8" />
                    </div>
                    <h2 className="mt-6 text-lg font-medium text-center">Card 1</h2>
                    <p className="mt-2 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-col items-center mx-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                        <img src="https://source.unsplash.com/random" alt="Icon" className="w-8 h-8" />
                    </div>
                    <h2 className="mt-6 text-lg font-medium text-center">Card 2</h2>
                    <p className="mt-2 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default recompensaLanding