import Layout from 'components/Layout'
import React from 'react'
import Stats from './Stats'
import Title from './Title'

export default function Dashboard() {
  return (
    <Layout>
        <div className="flex w-full">
            <div className=" lg:w-3/4 w-full lg:pr-12 pr-3 pb-12">
        <Title />
        <Stats />
            </div>
            <div className="min-h-screen w-1/4 bg-white py-12 pr-12 pl-8 lg:flex hidden">
                
            </div>
        </div>
    </Layout>
  )
}
