import { PencilIcon, ExternalLinkIcon, MailIcon } from '@heroicons/react/outline'
import React from 'react'

export default function LGCards({data}) {
  return (
    <div className="hidden md:grid grid-cols-1 xl:hidden lg:grid-cols-3 md:grid-cols-2 gap-4 mb-10">
      {
        data?.map((student, i)=>(
          <div className=" rounded-px20 py-8 bg-white mt-10 flex flex-col items-center col-span-1 w-full  transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg" key={i}>
        <div className="flex justify-center w-full mb-6">
          <img className=" w-28 h-28 bg-purple-300 rounded-full object-center object-cover ring-2 ring-gray-300 border-2 border-white" alt="" src={student.image} />
        </div>
        <p className=' mb-2 font-bold text-xl w-full text-blue-900 text-center'>
          {student.full_name}
        </p>
        <p className="text-center text-gray-400 mb-8">Teacher Course</p>
        <div className="flex justify-center">
          <button className="rounded-px40 border-2 border-indigo-700 bg-indigo-700 hover:bg-white hover:text-indigo-700 text-white md:py-2 md:px-2 py-2 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg px-2 flex items-center mr-4">
            <MailIcon className='h-6' />
            </button>
          <button className="rounded-px40 border-2 border-indigo-700 bg-indigo-700 hover:bg-white hover:text-indigo-700 text-white md:py-2 md:px-2 py-2 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg px-2 flex items-center">
            <ExternalLinkIcon className='h-6' />
            </button>
        </div>
      </div>
        ))
      }
      </div>
  )
}
