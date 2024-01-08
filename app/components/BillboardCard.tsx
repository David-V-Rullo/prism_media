import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Divider,
  Chip,
} from "@nextui-org/react";
import { BillboardData } from "@/types";

type BillboardCardProps = { billboard: BillboardData };

const BillboardCard: React.FC<BillboardCardProps> = ({ billboard }) => {
  const {
    billboardName,
    description,
    face,
    sizeX,
    sizeY,
    pixels,
    latitude,
    longitude,
    // availableTiming,
    unitNumber,
    vendor,
    mediaType,
  } = billboard;
  const randomPriceGenerator = () => {
    return Math.floor(Math.random() * 10000) + 1000;
  };
  return (
    <Card className="py-4 bg-slate-800 rounded-md h-[500px]">
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-1/3 -translate-y-3 scale-110 object-cover"
        src="Rt_80_P-001.png"
        width={270}
      />
      <CardHeader className="z-10 flex-col !items-start">
        <p className="text-small uppercase font-bold">{billboardName}</p>
        <p className="text-tiny">{vendor}</p>
      </CardHeader>

      <CardBody className="overflow-visible py-2">
        {" "}
        <p className="text-small italic py-2 pb-3">{description}</p>
        <p className="text-tiny font-bold">Unit Number: {unitNumber}</p>
        <p className="text-tiny font-bold">Face: {face}</p>
        <p className="text-tiny font-bold">
          {sizeX} x {sizeY} feet
        </p>
        <div className="flex gap-1">
          <Chip size="sm" color="success" className="py-1 my-1">
            AVAILABLE NOW!
          </Chip>
          <Chip size="sm" color="secondary" className="py-1 my-1">
            {mediaType}
          </Chip>
        </div>
        <Divider className="my-2" />
        <div className="flex gap-1 items-center justify-center pt-4">
          <h1 className="text-tiny font-bold">Lat: {latitude}</h1>{" "}
          <Divider orientation="vertical" className="mx-2" />{" "}
          <h1 className="text-tiny font-bold">Long: {longitude}</h1>
        </div>
        <div className="flex gap-1 items-center justify-center pt-4">
          <p className="text-small underline">
            Only ${randomPriceGenerator()} total per month!
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default BillboardCard;
