import React from 'react'

function securityLandings() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img className="w-3/4" src="https://source.unsplash.com/random" alt="Random Image" />
      </div>
      <div className="w-full md:w-1/2 md:ml-4">
        <h2 className="text-2xl font-bold mb-4">Subtitle</h2>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet magna vitae risus viverra, ac mattis justo malesuada. Suspendisse potenti. Ut id sem sit amet metus tincidunt aliquam. Vestibulum feugiat urna at fringilla commodo.</p>
      </div>
    </div>
  )
}
export default securityLandings