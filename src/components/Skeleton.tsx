import React from "react";

const TableSkeleton = () => {
  return (
    <table className="w-full text-sm text-left text-slate-500">
      <thead className="text-sm text-slate-700 uppercase bg-slate-100">
        <tr>
          <th className="px-6 py-3">#</th>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Phone Number</th>
          <th className="px-6 py-3">Created At</th>
          <th className="px-6 py-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="animate-pulse">
        <tr className="bg-white border-b border-slate-100">
          <td className="px-6 py-3">
            <div className="h-4 w-4 rounded bg-slate-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-slate-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-20 rounded bg-slate-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-slate-100"></div>
          </td>
          <td className="flex justify-center gap-1 py-3">
            <div className="h-7 w-7 rounded-sm bg-slate-100"></div>
            <div className="h-7 w-7 rounded-sm bg-slate-100"></div>
          </td>
        </tr>
        <tr className="bg-white border-b border-slate-100">
          <td className="px-6 py-3">
            <div className="h-4 w-4 rounded bg-slate-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-slate-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-20 rounded bg-slate-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-slate-100"></div>
          </td>
          <td className="flex justify-center gap-1 py-3">
            <div className="h-7 w-7 rounded-sm bg-slate-100"></div>
            <div className="h-7 w-7 rounded-sm bg-slate-100"></div>
          </td>
        </tr>
        <tr className="bg-white border-b border-slate-100">
          <td className="px-6 py-3">
            <div className="h-4 w-4 rounded bg-slate-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-slate-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-20 rounded bg-slate-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-slate-100"></div>
          </td>
          <td className="flex justify-center gap-1 py-3">
            <div className="h-7 w-7 rounded-sm bg-slate-100"></div>
            <div className="h-7 w-7 rounded-sm bg-slate-100"></div>
          </td>
        </tr>
        <tr className="bg-white border-b border-slate-100">
          <td className="px-6 py-3">
            <div className="h-4 w-4 rounded bg-slate-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-slate-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-20 rounded bg-slate-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-slate-100"></div>
          </td>
          <td className="flex justify-center gap-1 py-3">
            <div className="h-7 w-7 rounded-sm bg-slate-100"></div>
            <div className="h-7 w-7 rounded-sm bg-slate-100"></div>
          </td>
        </tr>
        <tr className="bg-white border-b border-slate-100">
          <td className="px-6 py-3">
            <div className="h-4 w-4 rounded bg-slate-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-slate-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-20 rounded bg-slate-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-slate-100"></div>
          </td>
          <td className="flex justify-center gap-1 py-3">
            <div className="h-7 w-7 rounded-sm bg-slate-100"></div>
            <div className="h-7 w-7 rounded-sm bg-slate-100"></div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableSkeleton;
