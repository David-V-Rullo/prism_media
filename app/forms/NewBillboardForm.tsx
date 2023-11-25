"use client";
import React, { useState } from "react";
import { BillboardFormData } from "@/types";
const BillboardForm: React.FC = () => {
  const [formData, setFormData] = useState<BillboardFormData>({
    // initialize with default values or empty strings/0/false
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Example for a text input */}
      <div>
        <label
          htmlFor="market"
          className="block text-sm font-medium text-gray-700"
        >
          Market
        </label>
        <input
          type="text"
          name="market"
          id="market"
          value={formData.market}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      {/* Repeat for other fields... */}

      {/* Example for a checkbox */}
      <div>
        <label
          htmlFor="illuminated"
          className="block text-sm font-medium text-gray-700"
        >
          Illuminated
        </label>
        <input
          type="checkbox"
          name="illuminated"
          id="illuminated"
          checked={formData.illuminated}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BillboardForm;
