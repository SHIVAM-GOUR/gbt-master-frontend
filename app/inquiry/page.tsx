import React from "react";

type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  industry: string;
  has_existing_website: boolean;
  preferred_contact_method: string;
};

async function getInquiries(): Promise<Inquiry[]> {
  const res = await fetch("https://gbt-master-backend-production.up.railway.app/inquiry", {
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch inquiries");
  }

  return res.json();
}

export default async function InquiryPage() {
  const inquiries = await getInquiries();

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Inquiries</h1>
      {inquiries.length === 0 ? (
        <p>No inquiries found.</p>
      ) : (
        <table className="w-full table-auto border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Industry</th>
              <th className="p-2 border">Website</th>
              <th className="p-2 border">Contact Method</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry) => (
              <tr key={inquiry.id} className="border-t">
                <td className="p-2 border">{inquiry.name}</td>
                <td className="p-2 border">{inquiry.email}</td>
                <td className="p-2 border">{inquiry.phone}</td>
                <td className="p-2 border">{inquiry.industry}</td>
                <td className="p-2 border">
                  {inquiry.has_existing_website ? "Yes" : "No"}
                </td>
                <td className="p-2 border">{inquiry.preferred_contact_method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
