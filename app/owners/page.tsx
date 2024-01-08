import React from "react";
import prisma from "../lib/db";
import BillboardCard from "../components/BillboardCard";
import Link from "next/link";
export async function getBillboards(id: number) {
  const billboards = await prisma.billboard.findMany({
    where: { ownerId: id },
  });
  return billboards;
}
const OwnerDashboardPage: React.FC = async () => {
  const billboards = await getBillboards(14).then((billboards) => {
    console.log(billboards);
    return billboards;
  });

  return (
    <div className="flex flex-col p-8">
      <div className="flex justify-center gap-4 ">
        <div className="flex flex-col gap-4 items-center p-8">
          <Link href="/owners/newBillboard">Add New Billboard</Link>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {billboards.map((billboard) => (
            <BillboardCard key={billboard.id} billboard={billboard} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboardPage;
