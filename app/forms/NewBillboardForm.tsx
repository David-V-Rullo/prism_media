"use client";
import React, { useState } from "react";
import { BillboardFormData } from "@/types";
import { Button, Input } from "@nextui-org/react";
import { createBillboard } from "../actions";
import { useFormState } from "react-dom";

const initialState = { message: "" };

const NewBillboardForm: React.FC = () => {
  const [state, formAction] = useFormState(createBillboard, initialState);
  // const [formData, setFormData] = useState<BillboardFormData>({
  //   billboardName: "Placeholder Name",
  //   market: "Placeholder Market",
  //   vendor: "Placeholder Vendor",
  //   mediaType: "Placeholder Media Type",
  //   unitNumber: "Placeholder Unit Number",
  //   tabId: "Placeholder Tab ID",
  //   numberOfUnits: 1,
  //   description: "Placeholder Description",
  //   face: "Placeholder Face",
  //   size: "Placeholder Size",
  //   pixels: "Placeholder Pixels",
  //   illuminated: false,
  //   weeklyEOIs: 1,
  //   fourWeekImp: 1,
  //   latitude: 0,
  //   longitude: 0,
  //   fourWeekRateCard: 1,
  //   fourWeekNegotiatedCost: 1,
  //   ownerId: 1,
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, type, checked } = e.target;
  //   const newValue = type === "checkbox" ? checked : value;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: newValue,
  //   }));
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   // Handle form submission logic here
  // };

  return (
    <form action={formAction} className="space-y-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row md:gap-4">
          <Input
            label="Billboard Name"
            id="name"
            name="name"
            placeholder="Enter Billboard Name"
          />
        </div>
        <div>
          <Input
            label="Market"
            id="market"
            name="market"
            placeholder="Enter Market"
          />
        </div>
      </div>
      <div>
        <Input
          label="Vendor"
          id="vendor"
          name="vendor"
          placeholder="Enter Vendor"
        />
      </div>
      <div>
        {/* This might need to be a dropdown */}
        <Input
          label="Media Type"
          id="mediaType"
          name="mediaType"
          placeholder="Should this be a dropdown?"
        />
      </div>
      <div>
        <Input
          label="Unit Number"
          id="unitNumber"
          name="unitNumber"
          placeholder="Enter Unit Number"
        />
      </div>
      <div>
        <Input
          label="Tab ID"
          id="tabId"
          name="tabId"
          placeholder="What the hell is a Tab ID?"
        />
      </div>
      <div>
        <Input
          label="Number of Units"
          id="numberOfUnits"
          name="numberOfUnits"
          placeholder="Enter Number of Units"
        />
      </div>
      <div>
        <Input
          label="Description"
          id="description"
          name="description"
          placeholder="Move this somewhere it can be a big text area"
        />
      </div>
      <div>
        <Input
          label="Face"
          id="face"
          name="face"
          placeholder="This can probably be a little box"
        />
      </div>
      <div>
        <Input
          label="Size"
          id="size"
          name="size"
          placeholder="This should be two  properly labeled input boxes with an 'x' inbetween for proper formatting."
        />
      </div>
      <div>
        <Input
          label="Pixels"
          id="pixels"
          name="pixels"
          placeholder="This should be a dropdown with accepted pixel counts, also surfaced to compare to client upload size"
        />
      </div>
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
          className="mt-1"
        />
      </div>
      <div>
        <label
          htmlFor="weeklyEOIs"
          className="block text-sm font-medium text-gray-700"
        >
          Weekly EOI's
        </label>
        <input
          type="text"
          name="weeklyEOIs"
          id="weeklyEOIs"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="Four Week IMP"
          className="block text-sm font-medium text-gray-700"
        >
          Four Week IMP
        </label>
        <input
          type="text"
          name="Four Week IMP"
          id="Four Week IMP"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="latitude"
          className="block text-sm font-medium text-gray-700"
        >
          Lat
        </label>
        <input
          type="text"
          name="latitude"
          id="latitude"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="market"
          className="block text-sm font-medium text-gray-700"
        >
          Long
        </label>
        <input
          type="text"
          name="longitude"
          id="longitude"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="market"
          className="block text-sm font-medium text-gray-700"
        >
          Available Timing
        </label>
        <input
          type="text"
          name="availableTiming"
          id="availableTiming"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="market"
          className="block text-sm font-medium text-gray-700"
        >
          Four Week Rate Card
        </label>
        <input
          type="text"
          name="fourWeekRateCard"
          id="fourWeekRateCard"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="market"
          className="block text-sm font-medium text-gray-700"
        >
          Four Week Neogtiated Cost
        </label>
        <input
          type="text"
          name="fourWeekNegotiatedCost"
          id="fourWeekNegotiatedCost"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="market"
          className="block text-sm font-medium text-gray-700"
        >
          Number of Installs Included
        </label>
        <input
          type="text"
          name="installsIncluded"
          id="installsIncluded"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="market"
          className="block text-sm font-medium text-gray-700"
        >
          Additional Install Cost
        </label>
        <input
          type="text"
          name="additionalInstallCost"
          id="additionalInstallCost"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="market"
          className="block text-sm font-medium text-gray-700"
        >
          Production Cost
        </label>
        <input
          type="text"
          name="productionCost"
          id="productionCost"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="market"
          className="block text-sm font-medium text-gray-700"
        >
          Shipping Address
        </label>
        <input
          type="text"
          name="shippingAddress"
          id="shippingAddress"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="market"
          className="block text-sm font-medium text-gray-700"
        >
          Artwork Deadline
        </label>
        <input
          type="text"
          name="artworkDeadline"
          id="artworkDeadline"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit{" "}
        </Button>
      </div>
    </form>
  );
};

export default NewBillboardForm;
