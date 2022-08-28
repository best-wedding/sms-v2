import { ExternalLinkIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Table({data}) {
  return (
    <div className="bg-white rounded-3xl p-8 w-full shadow xl:block hidden">
        <div className="grid grid-cols-10 gap-5 items-stretch text-blue-900 mb-6">
          <input
            type="checkbox"
            name=""
            id=""
            className="col-span-1 h-6 w-6 form-checkbox rounded"
          />
          <div className="col-span-3 font-semibold text-sm">Name</div>
          <div className="col-span-1 font-semibold text-sm">Class</div>
          <div className="col-span-1 font-semibold text-sm">Gender</div>
          <div className="col-span-1 font-semibold text-sm">Status</div>
          <div className="col-span-1 font-semibold text-sm">Age</div>
          <div className="col-span-1 font-semibold text-sm">Contact</div>
          <div className="col-span-1 font-semibold text-sm">Grade</div>
        </div>
        {data?.map((student) => (
          <div className="grid grid-cols-10 gap-5 items-stretch text-blue-900 h-28  border-b">
            <div className="col-span-1 flex items-center">
              <input type="checkbox" name="" id="" className="h-6 w-6 focus:ring-2 rounded form-checkbox" />
            </div>
            <div className="col-span-3 flex items-center">
              <img className="h-12 w-12 rounded-full mr-4 object-center object-cover" src={student.image} />
              <div className="font-bold text-blue-900 text-lg">{student.full_name}</div>
            </div>
            <div className="col-span-1 text-blue-900 font-normal text-base flex items-center">{student.current_class.name}</div>
            <div className="col-span-1 text-blue-900 font-normal text-base flex items-center">{student.gender}</div>
            <div className="col-span-1 text-blue-900 font-normal text-base flex items-center">Debtor</div>
            <div className="col-span-1 text-blue-900 font-normal text-base flex items-center">{student.age}</div>
            <div className="col-span-1 text-blue-900 font-normal text-base flex items-center">
            <div className=" rounded-full border-2 border-indigo-700 bg-indigo-50 hover:bg-indigo-700 text-indigo-700 hover:text-white p-2  transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg cursor-pointer mr-6">
            <PhoneIcon className='h-6 w-6' />
                </div>
                <div className=" rounded-full border-2 border-indigo-700 bg-indigo-50 hover:bg-indigo-700 text-indigo-700 hover:text-white p-2  transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg cursor-pointer">
            <MailIcon className='h-6 w-6' />
                </div>
            </div>
            <div className="col-span-1 text-blue-900 font-normal text-base flex items-center">
                {/* <button className="rounded-full border-2 border-indigo-700 bg-indigo-50 hover:bg-indigo-700 text-indigo-700 hover:text-white md:py-1 md:px-6 py-2 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg px-6 flex items-center"> */}
                <div className=" rounded-full border-2 border-indigo-700 bg-indigo-50 hover:bg-indigo-700 text-indigo-700 hover:text-white p-2  transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg cursor-pointer">
            <ExternalLinkIcon className='h-6 w-6' />
                </div>
            {/* </button> */}
            </div>
          </div>
        ))}
    </div>
  )
}
