import { BookOpenIcon } from "@heroicons/react/outline";
import Layout from "components/Layout";
import React from "react";

export default function Events() {
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
            <div className=" w-52 h-52 rounded-full border-4 border-white bg-purple-300 -mt-24 lg:ml-8 mx-auto"></div>
            <p className=" mt-6 text-blue-900 font-bold text-3xl lg:px-8 flex w-full justify-center lg:justify-start">
              Teacher's Name
            </p>
            <div className="lg:grid-cols-3 grid-cols-1 md:grid-cols-2 px-8 mt-8 w-full">
              {["", "", "", "", "", ""].map(() => (
                <div className="flex col-span-1 lg:mr-10 md:mr-6">
                  <div className="w-10 h-10 flex justify-center items-center bg-indigo-700 rounded-full mr-2">
                    <BookOpenIcon className="w-6 h-6 text-white rounded-full" />
                  </div>
                  <p className="text-blue-900 text-lg font-semibold h-10 flex items-center">
                    Teacher Subject
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-96 lg:block hidden"></div>
      </div>
    </Layout>
  );
}
