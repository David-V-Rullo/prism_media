"use client";
import { Button, Input } from "@nextui-org/react";
import { createBillboard } from "../lib/actions";
import { useFormState } from "react-dom";

const initialState = { message: "" };

const NewBillboardFormCopy: React.FC = () => {
  const [state, formAction] = useFormState(createBillboard, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            label="Billboard Name"
            id="billboardName"
            name="billboardName"
            placeholder="Enter Billboard Name"
          />

          <Input
            label="Market"
            id="market"
            name="market"
            placeholder="Enter Market"
          />

          <Input
            label="Vendor"
            id="vendor"
            name="vendor"
            placeholder="Enter Vendor"
          />
          <Input
            label="Media Type"
            id="mediaType"
            name="mediaType"
            placeholder="Enter Media Type"
          />
          {/* This might need to be a dropdown */}
          <Input
            label="Media Type"
            id="mediaType"
            name="mediaType"
            placeholder="Should this be a dropdown?"
          />

          <Input
            label="Size"
            id="size"
            name="size"
            placeholder="This should be two  properly labeled input boxes with an 'x' inbetween for proper formatting."
          />
        </div>
      </div>
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

export default NewBillboardFormCopy;
