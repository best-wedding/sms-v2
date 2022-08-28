import Layout from '../../components/Layout'
import React from 'react'
import Stats from '../../components/Dashboard/Stats'
import Title from '../../components/Dashboard/Title'

export default function Dashboard() {
  return (
    <Layout>
        <div className="flex w-full">
            <div className=" xl:w-3/4 w-full xl:pr-12 pr-3 pb-12">
        <Title />
        <Stats />
            </div>
            <div className="min-h-screen w-1/4 bg-white py-12 pr-12 pl-8 xl:flex hidden">
                
            </div>
        </div>
    </Layout>
  )
}
