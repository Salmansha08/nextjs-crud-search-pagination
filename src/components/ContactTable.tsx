import React from "react";
import { getContacts } from "@/libs/data";
import { formatDate } from "@/libs/utils";
import { EditButton, DeleteButton } from "@/components/Button";

const ContactTable = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const contacts = await getContacts(query, currentPage);
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
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={contact.id} className="bg-white border-b">
            <td className="px-6 py-3">{index + 1}</td>
            <td className="px-6 py-3">{contact.name}</td>
            <td className="px-6 py-3">{contact.phone}</td>
            <td className="px-6 py-3">
              {formatDate(contact.createdAt.toString())}
            </td>
            <td className="flex justify-center gap-1 py-3">
              <EditButton id={contact.id} />
              <DeleteButton id={contact.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
