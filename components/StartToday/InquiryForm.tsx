// "use client";

// import { useState } from "react";

// export default function InquiryForm() {
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     industry: "",
//     hasWebsite: "yes",
//     contactMethod: "email",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();


//   const payload = {
//     name: form.fullName,
//     email: form.email,
//     phone: form.phone,
//     industry: form.industry,
//     has_existing_website: form.hasWebsite === "yes",
//     preferred_contact_method: form.contactMethod,
//   };

//   try {
//     const response = await fetch(
//       "https://gbt-master-backend-production.up.railway.app/inquiry",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to submit inquiry");
//     }

//     const result = await response.json();
//     console.log("Inquiry submitted:", result);

//     alert("Inquiry submitted successfully!");
//   } catch (error) {
//     console.error("Error submitting inquiry:", error);
//     alert("There was an error submitting the form.");
//   }
// };


//   return (
//     <div className="bg-white text-black p-8 rounded-xl shadow-lg max-w-4xl mx-auto mb-16">
//       <h3 className="text-2xl font-bold text-center">Inquiry Form</h3>
//       <p className="text-center text-gray-600 text-sm my-8">
//         Fill out the form below and we’ll get back to you within 24 hours
//       </p>
//       <form onSubmit={handleSubmit} className="space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="flex flex-col mb-4">
//             <label
//               htmlFor="fullName"
//               className="text-sm font-bold mb-2 text-left"
//             >
//               Full Name *
//             </label>
//             <input
//               name="fullName"
//               type="text"
//               placeholder="Enter your full name"
//               value={form.fullName}
//               onChange={handleChange}
//               className="border border-gray-400 px-4 py-2 rounded w-full"
//               required
//             />
//           </div>

//           <div className="flex flex-col mb-4">
//             <label htmlFor="email" className="text-sm font-bold mb-2 text-left">
//               Email Address *
//             </label>
//             <input
//               name="email"
//               type="email"
//               placeholder="Enter your email address"
//               value={form.email}
//               onChange={handleChange}
//               className="border border-gray-400 px-4 py-2 rounded w-full"
//               required
//             />
//           </div>

//           <div className="flex flex-col mb-4">
//             <label htmlFor="phone" className="text-sm font-bold mb-2 text-left">
//               Phone Number *
//             </label>
//             <input
//               name="phone"
//               placeholder="Enter your phone number"
//               value={form.phone}
//               onChange={handleChange}
//               className="border border-gray-400 px-4 py-2 rounded w-full"
//               required
//             />
//           </div>

//           <div className="flex flex-col mb-4">
//             <label
//               htmlFor="industry"
//               className="text-sm font-bold mb-2 text-left"
//             >
//               Industry *
//             </label>
//             <select
//               name="industry"
//               value={form.industry}
//               onChange={handleChange}
//               className="border border-gray-400 bg-gray-200 px-4 py-2.5 rounded w-full"
//               required
//             >
//               <option>Select an industry</option>
//               <option value="Education (School/College)">Education (School/College)</option>
//               <option value="Real Estate">Real Estate</option>
//               <option value="Ecommerce">Ecommerce</option>
//               <option value="Manufacturing">Manufacturing</option>
//               <option value="Other">Other</option>

//             </select>
//           </div>
//         </div>

//         <div>
//           <label className="block font-medium mb-2 text-left">
//             Do you have an existing website?*
//           </label>
//           <div className="flex gap-16">
//             <label>
//               <input
//                 type="radio"
//                 name="hasWebsite"
//                 value="yes"
//                 checked={form.hasWebsite === "yes"}
//                 onChange={handleChange}
//               />{" "}
//               Yes
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="hasWebsite"
//                 value="no"
//                 checked={form.hasWebsite === "no"}
//                 onChange={handleChange}
//               />{" "}
//               No
//             </label>
//           </div>
//         </div>

//         <div>
//           <label className="block font-medium mb-2 text-left">
//             Preferred Contact Method*
//           </label>
//           <div className="flex justify-between">
//             <label>
//               <input
//                 type="radio"
//                 name="contactMethod"
//                 value="email"
//                 checked={form.contactMethod === "email"}
//                 onChange={handleChange}
//               />{" "}
//               Email
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="contactMethod"
//                 value="phone"
//                 checked={form.contactMethod === "phone"}
//                 onChange={handleChange}
//               />{" "}
//               Phone Call
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="contactMethod"
//                 value="whatsapp"
//                 checked={form.contactMethod === "whatsapp"}
//                 onChange={handleChange}
//               />{" "}
//               WhatsApp
//             </label>
//           </div>
//         </div>

//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-green-10 text-white px-6 py-2 rounded-full shadow-lg"
//           >
//             Submit Inquiry
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

export default function InquiryForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    industry: "",
    hasWebsite: "yes",
    contactMethod: "email",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowSuccess(false);

    const payload = {
      name: form.fullName,
      email: form.email,
      phone: form.phone,
      industry: form.industry,
      has_existing_website: form.hasWebsite === "yes",
      preferred_contact_method: form.contactMethod,
    };

    try {
      const response = await fetch(
        "https://gbt-master-backend-production.up.railway.app/inquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      const result = await response.json();
      console.log("Inquiry submitted:", result);

      setShowSuccess(true);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        industry: "",
        hasWebsite: "yes",
        contactMethod: "email",
      });
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      alert("There was an error submitting the form.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <div className="bg-white text-black p-8 rounded-xl shadow-lg max-w-4xl mx-auto mb-16">
      <h3 className="text-2xl font-bold text-center">Inquiry Form</h3>
      <p className="text-center text-gray-600 text-sm my-8">
        Fill out the form below and we’ll get back to you within 24 hours
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="fullName" className="text-sm font-bold mb-2 text-left">
              Full Name *
            </label>
            <input
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
              className="border border-gray-400 px-4 py-2 rounded w-full"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-sm font-bold mb-2 text-left">
              Email Address *
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-400 px-4 py-2 rounded w-full"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="phone" className="text-sm font-bold mb-2 text-left">
              Phone Number *
            </label>
            <input
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              className="border border-gray-400 px-4 py-2 rounded w-full"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="industry" className="text-sm font-bold mb-2 text-left">
              Industry *
            </label>
            <select
              name="industry"
              value={form.industry}
              onChange={handleChange}
              className="border border-gray-400 bg-gray-200 px-4 py-2.5 rounded w-full"
              required
            >
              <option value="">Select an industry</option>
              <option value="Education (School/College)">Education (School/College)</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Ecommerce">Ecommerce</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-2 text-left">
            Do you have an existing website?*
          </label>
          <div className="flex gap-16">
            <label>
              <input
                type="radio"
                name="hasWebsite"
                value="yes"
                checked={form.hasWebsite === "yes"}
                onChange={handleChange}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="hasWebsite"
                value="no"
                checked={form.hasWebsite === "no"}
                onChange={handleChange}
              />{" "}
              No
            </label>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-2 text-left">
            Preferred Contact Method*
          </label>
          <div className="flex justify-between">
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={form.contactMethod === "email"}
                onChange={handleChange}
              />{" "}
              Email
            </label>
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={form.contactMethod === "phone"}
                onChange={handleChange}
              />{" "}
              Phone Call
            </label>
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="whatsapp"
                checked={form.contactMethod === "whatsapp"}
                onChange={handleChange}
              />{" "}
              WhatsApp
            </label>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-2 rounded-full shadow-lg ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-green-10 text-white"
            }`}
          >
            {isLoading ? "Submitting..." : "Submit Inquiry"}
          </button>

          {showSuccess && (
            <p className="text-green-10 mt-4 font-semibold">
              Inquiry submitted successfully!
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
