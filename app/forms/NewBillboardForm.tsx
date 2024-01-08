"use client";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { createBillboard } from "../lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";
import Link from "next/link";

const initialState = { message: "" };

const NewBillboardForm: React.FC = () => {
  const [mediaValue, setMediaValue] = useState("");
  const [state, formAction] = useFormState(createBillboard, initialState);
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMediaValue(e.target.value);
  };
  const { pending } = useFormStatus();
  return (
    <div>
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
            <Select
              isRequired
              name="mediaType"
              label="Media Type"
              placeholder="Select a Media Type"
              onChange={handleSelectionChange}
            >
              <SelectItem key="digital" value="digital">
                Digital
              </SelectItem>
              <SelectItem key="static" value="static">
                Static
              </SelectItem>
              <SelectItem key="other" value="other">
                Other
              </SelectItem>
            </Select>

            <Input
              label="Unit Number"
              id="unitNumber"
              name="unitNumber"
              placeholder="Enter Unit Number"
            />

            <div className="flex gap-2">
              <Input label="Latitude" id="x" name="latitude" />
              <Input label="Longitude" id="y" name="longitude" />
              <Input
                label="Face"
                id="face"
                name="face"
                placeholder="This can probably be a little box"
              />
            </div>

            <div className="flex gap-2">
              <Input label="Width" id="x" name="sizeX" />
              <Input label="Height" id="y" name="sizeY" />
            </div>
            <Input
              label="Pixels"
              id="pixels"
              name="pixels"
              placeholder="This should be a dropdown with accepted pixel counts, also surfaced to compare to client upload size"
            />
            <Textarea
              label="Description"
              id="description"
              name="description"
              minRows={3}
            />
          </div>
        </div>
        <div className="flex justify-start gap-4">
          {pending ? (
            <Button type="submit" color="primary" isLoading>
              Submit{" "}
            </Button>
          ) : (
            <Button type="submit" color="primary">
              Submit{" "}
            </Button>
          )}

          <Button color="danger" variant="faded">
            <Link href="/owners">Cancel</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewBillboardForm;
