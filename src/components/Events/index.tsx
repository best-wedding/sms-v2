import Layout from 'components/Layout'
import React from 'react'

export default function Events() {
  return (
    <Layout>
        <div className="flex justify-between w-full">
        <div className="flex-grow mr-16 w-full rounded-lg h-36"
        //  style={{
        //   backgroundImage: `url(${require("../../images/cover.png")})`,
        //   backgroundPosition: "top left",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat"
        // }}
        >
            <img src={require("../../images/cover.png")} className="w-full rounded-t-lg" />
        <div className=" w-52 h-52 rounded-full border-4 border-white bg-purple-300 -mt-24 ml-8"></div>
        </div>
        <div className=" w-96"></div>
        </div>
    </Layout>
  )
}
