import { SearchIcon, ChevronDownIcon, UserAddIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Title() {
  return (
    <div className="lg:flex grid grid-cols-2 gap-4 justify-between w-full">
      <div className="flex rounded-md shadow-sm flex-grow items-center">
        <div className="relative flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 lg:flex items-center pl-3 pointer-events-none hidden">
              <SearchIcon className="text-indigo-700 w-8 h-8" aria-hidden="true" />
            </div>
            <input
              type="search"
              name="search_students "
              id="search_students"
              className="block w-full focus:ring-indigo-500 focus:border-indigo-500 rounded-full py-1 h-14 lg:w-80 lg:pl-20 pl-4 placeholder-gray-400 text-lg font-normal"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex justify-end w-full lg:pr-0">
          
          <button className="rounded-px40 border-2 border-indigo-700 bg-indigo-700 hover:bg-white hover:text-indigo-700 text-white md:py-3 md:px-12 py-3 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg px-6 flex items-center">
            <UserAddIcon className='h-6 mr-2 text-xl' />
            New Student
            </button>
        </div>
      </div>
  )
}
