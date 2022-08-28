import {
  UserGroupIcon,
  UsersIcon,
  CalendarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import React from "react";

export default function Stats() {
  const DashboardStats = [
    { name: "Students", icon: UsersIcon, color: "indigo-700", mr: "20", value: "932" },
    { name: "Teachers", icon: UserGroupIcon, color: "red-400", mr: "20", value: "754" },
    { name: "Events", icon: CalendarIcon, color: "yellow-400", mr: "20", value: "40" },
    { name: "Foods", icon: ShoppingBagIcon, color: "blue-900", mr: "", value: "32k" },
  ];
  return (
    <div className="lg:h-auto w-full rounded-2xl lg:grid-cols-2 xl:grid-cols-2 lg:p-12 grid grid-cols-1 gap-3 items-stretch">
        {
            DashboardStats.map((stat, i)=>(
      <div className={`flex lg:mr-${stat.mr} bg-white rounded-2xl lg:p-8 p-8 w-full`} key={i}>
        <div className={`rounded-full h-20 w-20 border-2 border-white bg-${stat.color} flex items-center justify-center ring-2 ring-${stat.color}`}>
          <stat.icon className="text-white h-10 w-10" />
        </div>
        <div className="flex flex-col ml-7">
          <div className=" text-lg font-normal text-gray-400">{stat.name}</div>
          <div className=" font-bold text-4xl text-blue-900">{stat.value}</div>
        </div>
      </div>
            ))
        }
    </div>
  );
}
