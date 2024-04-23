import React from 'react'


const Table = ({data}) => {
  return (
    <div className="overflow-x-auto  flex justify-center mt-8">
      <table className="table-auto divide-y divide-gray-200 border border-gray-300 w-3/4 bg-orange-200">
        <thead className="">
        {/* table-auto divide-y divide-gray-200 border border-gray-300 w-3/4 */}
        <tr className="bg-gray-50 bg-orange-300 ">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-slate-300">Tittle</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-slate-300">Upvote</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
         
        </tr>
        </thead>
        <tbody className="divide-gray-200 bg-orange-100">
        {data.map((item, key) => (
            <tr key={key} className="hover:bg-white border  ">
            <td className="px-6 py-4 border border-slate-300  ">{item.title}</td>
            <td className="px-6 py-4 whitespace-nowrap border border-slate-300 ">{item.upvotes}</td>
            <td className="px-6 py-4 whitespace-nowrap border border-slate-300 ">{item.date}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
