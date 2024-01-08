"use client";
import { Button, Input } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { createOwner } from "../lib/actions";
const initialState = {};
const NewOwnerForm = () => {
  const [formState, formAction] = useFormState(createOwner, initialState);

  return (
    <div className="flex flex-col gap-4 p-20">
      <form action={formAction}>
        <Input
          label="Name"
          id="name"
          name="name"
          //   value={{formState} ? {formState.name} : ""}
          //   onChange={handleChange}
        />
        <Input
          label="Email"
          type="email"
          id="email"
          name="email"
          //   value={formData.email}
          //   onChange={handleChange}
        />
        {/* <Input label="Address" id="address" name="address" /> */}
        <Button type="submit">Create Profile</Button>
      </form>
    </div>
  );
};

export default NewOwnerForm;
