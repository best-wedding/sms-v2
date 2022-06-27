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
    <div className="lg:bg-white lg:h-44 w-full rounded-2xl lg:flex lg:p-12 grid grid-cols-1 gap-3">
        {
            DashboardStats.map((stat, i)=>(
      <div className={`flex lg:mr-${stat.mr} bg-white rounded-2xl lg:p-0 p-8`} key={i}>
        <div className={`rounded-full h-20 w-20 border-2 border-${stat.color} bg-${stat.color} flex items-center justify-center`}>
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
