import Layout from 'components/Layout'
import React from 'react'
import {BellIcon, CogIcon, PlusIcon, SearchIcon, ArrowDownIcon, UserAddIcon, ChevronDownIcon, DotsHorizontalIcon, PencilAltIcon, PencilIcon, ExternalLinkIcon, ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline"
export default function Teachers() {
  return (
    <Layout>
      <div className="flex justify-between w-full">
      <div className="sm:flex hidden rounded-md shadow-sm">
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
        <div className="flex">
          <button className="rounded-px40 border-2 border-indigo-700 bg-transparent hover:bg-indigo-700 text-indigo-700 hover:text-white md:py-3 md:px-12 py-3 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg px-6 flex items-center mr-6">
              Newest
            <ChevronDownIcon className='h-6 ml-4' />
            </button>
          <button className="rounded-px40 border-2 border-indigo-700 bg-indigo-700 hover:bg-white hover:text-indigo-700 text-white md:py-3 md:px-12 py-3 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg px-6 flex items-center">
            <UserAddIcon className='h-6 mr-4 text-xl' />
            New Student
            </button>
          {/* <div className="rounded-px40"></div> */}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 mb-10">
      {
        ["","","","","","","","","","","","",].map(item=>(
          <div className=" rounded-px20 py-8 bg-white mt-10 flex flex-col items-center col-span-1 w-full  transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg">
        <div className="flex justify-center w-full mb-6">
          <div className=" w-28 h-28 bg-purple-300 rounded-full"></div>
        </div>
        <p className=' mb-2 font-bold text-xl w-full text-blue-900 text-center'>
          Teacher Name
        </p>
        <p className="text-center text-gray-400 mb-8">Teacher Course</p>
        <div className="flex justify-center">
          <button className="rounded-px40 border-2 border-indigo-700 bg-indigo-700 hover:bg-white hover:text-indigo-700 text-white md:py-2 md:px-2 py-2 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg px-2 flex items-center mr-4">
            <PencilIcon className='h-6' />
            </button>
          <button className="rounded-px40 border-2 border-indigo-700 bg-indigo-700 hover:bg-white hover:text-indigo-700 text-white md:py-2 md:px-2 py-2 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg px-2 flex items-center">
            <ExternalLinkIcon className='h-6' />
            </button>
        </div>
      </div>
        ))
      }
      </div>
      <div className="mb-10 w-full flex justify-between">
        <p className=' font-normal text-base text-purple-300 hidden md:block'>
          Showing{" "}<span className="text-blue-900">1-12</span>{" "}from{" "}<span className="text-blue-900">100</span>{" "}data
        </p>
        <div className="flex w-full md:w-auto justify-center">
        <button className="rounded-px40 text-indigo-700 md:py-2 md:px-2 py-2 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg px-2 flex items-center">
          <ChevronLeftIcon className='h-6' />
          </button>
        <button className="rounded-px40 border-2 border-indigo-700 bg-indigo-700 hover:bg-white hover:text-indigo-700 text-white transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg w-12 h-12 flex items-center justify-center ml-4">
          1
          </button>
        <button className="rounded-px40 border-2 border-indigo-700 bg-purple-300 hover:bg-indigo-700 hover:text-white text-indigo-700 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg w-12 h-12 flex items-center justify-center mx-4">
          2
          </button>
        <button className="rounded-px40 border-2 border-indigo-700 bg-purple-300 hover:bg-indigo-700 hover:text-white text-indigo-700 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg w-12 h-12 flex items-center justify-center mr-4">
          3
          </button>
        <button className="rounded-px40 text-indigo-700 md:py-2 md:px-2 py-2 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg px-2 flex items-center">
          <ChevronRightIcon className='h-6' />
          </button>
        </div>
      </div>
    </Layout>
  )
}
