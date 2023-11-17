import React from 'react'

function faqsLanding() {
  return (
    <div className="flex flex-col md:flex-row  justify-center">
        <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Title</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor erat vel scelerisque sagittis. Sed vitae fermentum justo. Fusce sit amet consequat sem.</p>
            </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src="https://source.unsplash.com/random" alt="Random Image" className="w-3/4" />
        </div>
    </div>
  )
}

export default faqsLanding