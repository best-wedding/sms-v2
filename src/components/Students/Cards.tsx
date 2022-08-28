import React from 'react'

export default function Cards({data}) {
    const people = [
        {
          name: 'Jubril Musa',
          email: 'lesliealexander@example.com',
          role: 'Co-Founder / CEO',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        // More people...
      ]
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden p-2">
      {data?.map((data, i) => (
        <div
          key={i}
          className="relative rounded-lg bg-white px-6 py-5 shadow flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full object-center object-cover" src={data.image} alt="" />
          </div>
          <div className="flex-1 min-w-0">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{data.full_name}</p>
              <p className="text-sm text-gray-500 truncate">{data.current_class.name}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
