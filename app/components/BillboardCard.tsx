import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
interface HeroHeaderProps {
  title?: string;
  image?: string;
}
const BillboardCard: React.FC<HeroHeaderProps> = ({ title, image }) => {
  return (
    <Card className="py-4 bg-slate-800 rounded-md">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">123 Main Street,</small>
        <small className="text-default-500">FuckTown,</small>
        <small className="text-default-500">USA</small>
        <h4 className="font-bold text-large">Available Now!</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
      </CardBody>
    </Card>
  );
};

export default BillboardCard;
