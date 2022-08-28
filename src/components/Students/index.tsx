import Layout from 'components/Layout'
import React from 'react'
import Title from './Title'

export default function Students() {
  return (
    <Layout>
      <Title />
        <div className="flex w-full lg:p-12 pr-3">
        Students
        </div>
        <div className="bg-white rounded-3xl p-8 w-full shadow">
          <div className="grid grid-cols-10 gap-5 items-stretch text-blue-900 mb-6">
            <input type="checkbox" name="" id="" className='col-span-1 h-6 w-6 pl-8' />
            <div className="col-span-3 font-semibold text-sm">Name</div>
            <div className="col-span-1 font-semibold text-sm">Class</div>
            <div className="col-span-1 font-semibold text-sm">Gender</div>
            <div className="col-span-1 font-semibold text-sm">Status</div>
            <div className="col-span-1 font-semibold text-sm">Age</div>
            <div className="col-span-1 font-semibold text-sm">Contact</div>
            <div className="col-span-1 font-semibold text-sm">Grade</div>
          </div>
            {
              ["","","","","","",""].map(student=>(
                <div className="grid grid-cols-10 gap-5 items-stretch text-blue-900 h-28 ">
                  <div className="col-span-1 flex items-center">
                <input type="checkbox" name="" id="" className='h-6 w-6 pl-8 border-2' />
                  </div>
                <div className="col-span-3 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-purple-300 mr-4" />
                <div className="font-bold text-blue-900 text-lg">Jubril Musa</div>
                  </div>
                  <div className="col-span-1 text-blue-900 text-sm">Basic 6</div>
                </div>
              ))
            }
        </div>
    </Layout>
  )
}
