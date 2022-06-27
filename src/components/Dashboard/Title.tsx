import { SearchIcon, MenuIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Title() {
  return (
    <>
    <div className='lg:flex justify-between mb-10 w-full hidden lg:pt-12'>
        <div className="text-blue-900 font-bold text-4xl" >Dashboard</div>
        <div className="flex rounded-md shadow-sm">
        <div className="relative flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="text-indigo-700 w-8 h-8" aria-hidden="true" />
            </div>
            <input
              type="search"
              name="search_students "
              id="search_students"
              className="block w-full focus:ring-indigo-500 focus:border-indigo-500 rounded-full py-1 h-14 lg:w-80 pl-20 placeholder-gray-400 text-lg font-normal"
              placeholder="Search"
            />
          </div>
        </div>
    </div>
    </>
  )
}
