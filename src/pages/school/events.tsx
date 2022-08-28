import { BookOpenIcon, CalendarIcon, MailIcon, MapIcon, PhoneIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/outline";
import Layout from "../../components/Layout";
import React from "react";

export default function Events() {
  var about = [
    {
      icon: MailIcon,
      data: null,
    },
    {
      icon: UsersIcon,
      data: null,
    },
    {
      icon: UserGroupIcon,
      data: null,
    },
    {
      icon: PhoneIcon,
      data: null,
    },
    {
      icon: CalendarIcon,
      data: null,
    },
    {
      icon: MapIcon,
      data: null,
    },
  ]
  return (
    <Layout>
      <div className="lg:flex lg:justify-between w-full">
        <div className="w-full flex flex-col">
          <div
            className="lg:mr-16 w-full rounded-t-xl h-36 bg-cover"
            style={{
              backgroundImage: `url(${require("../../images/cover.png")})`,
              backgroundPosition: "center",
              //  backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <img src={require("../../images/cover.png")} className="w-full rounded-t-lg" /> */}
          </div>
          <div className="w-full bg-white h-screen">
            <img className=" w-52 h-52 rounded-full border-4 border-white bg-purple-300 -mt-24 lg:ml-8 mx-auto transform transition-all hover:scale-105 duration-500 object-center object-cover" alt='' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' />
            <p className=" mt-6 text-blue-900 font-bold text-3xl lg:px-8 flex w-full justify-center lg:justify-start">
              Jubril Musa
            </p>
            <div className="mt-2 flex text-gray-400 px-8 items-center md:justify-start justify-between">
              <div className="font-semibold lg:mr-10 md:mr-6 mr-3 text-lg">Role: Teacher</div>
              <div className="font-bold text-sm">Activation Code: 777777</div>
            </div>
            <div className="mt-2 flex text-gray-400 px-8 items-center md:justify-start justify-between">
              <div className="font-semibold lg:mr-10 md:mr-6 mr-3 text-lg">Verification Status:</div>
              <div className="font-bold text-sm bg-red-600 p-2 rounded-3xl text-white">Not Verified</div>
            </div>
            <div className="mt-10 text-blue-900 font-bold mb-4 px-8 text-2xl">
              Courses:
            </div>
            <div className="xl:grid-cols-3 grid-cols-1 sm:grid-cols-2 px-8 mt-8 grid gap-4">
              {["", "", "", "", "", ""].map(() => (
                <div className="flex col-span-1 lg:mr-10 md:mr-6 bg-indigo-50 hover:bg-indigo-200 cursor-pointer p-2 rounded-lg shadow transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                  <div className="w-10 h-10 flex justify-center items-center bg-indigo-700 rounded-full mr-2">
                    <BookOpenIcon className="w-6 h-6 text-white rounded-full" />
                  </div>
                  <p className="text-blue-900 text-lg font-semibold h-10 flex items-center">
                    Teacher Subject
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-blue-900 font-bold mb-4 px-8 text-2xl">
              About:
            </div>
            <div className="xl:grid-cols-3 grid-cols-1 sm:grid-cols-2 px-8 mt-8 grid gap-4">
              {about.map((data) => (
                <div className="flex col-span-1 lg:mr-10 md:mr-6 bg-indigo-50 hover:bg-indigo-200 cursor-pointer p-2 rounded-lg shadow transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                  <div className="w-10 h-10 flex justify-center items-center bg-indigo-700 rounded-full mr-2">
                    <data.icon className="w-6 h-6 text-white rounded-full" />
                  </div>
                  <p className="text-blue-900 text-lg font-semibold h-10 flex items-center">
                    {data.data}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-96 xl:block hidden"></div>
      </div>
    </Layout>
  );
}
