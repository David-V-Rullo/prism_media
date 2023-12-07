import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Divider,
  Chip,
} from "@nextui-org/react";
interface HeroHeaderProps {
  title?: string;
  image?: string;
  chipType?: string;
}
const BillboardCard: React.FC<HeroHeaderProps> = ({
  title,
  image,
  chipType,
}) => {
  return (
    <Card className="py-4 bg-slate-800 rounded-md">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">123 Main Street,</small>
        <small className="text-default-500">FuckTown,</small>
        <small className="text-default-500">USA</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="flex gap-1">
          <Chip size="sm" color="success" className="py-1 my-1">
            Available Now
          </Chip>
          <Chip size="sm" color="secondary" className="py-1 my-1">
            {chipType}
          </Chip>
        </div>
        <Divider className="my-2" />
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
