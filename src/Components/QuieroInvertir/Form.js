import React from 'react'
import { Input, Textarea } from "@nextui-org/react";

import imgForm from "../../Assets/QuieroInvertir/form.jpg"

function Form() {
  return (
    <div>
        <div className='flex flex-col md:flex-row mb-12'>
            <div className='w-4/12 flex flex-col hidden md:block'>
                <img src={imgForm} alt='imgform' className=''/>
            </div>
              
            <div id='form' className='w-8/12 flex flex-col items-center'>
                <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
                <div className="w-10/12 space-y-8 justify-center">
                    <Input type="name" label="Name" color='primary' />
                    <div className="flex md:flex-row space-x-8 ">
                        <Input type="email" label="Email" color='primary' />
                        <Input type="tel" label="Telephone" color='primary' />
                    </div>
                    <Textarea label="Description" color='primary'/>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 px-4 rounded-lg font-bold uppercase hover:bg-gray-800"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form