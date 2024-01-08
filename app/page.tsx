import { Divider } from "@nextui-org/react";
import BillboardCard from "./components/BillboardCard";
import SearchBar from "./components/SearchBar";
import prisma from "./lib/db";
import { Suspense } from "react";

export async function getBillboards() {
  const billboards = await prisma.billboard.findMany();
  return billboards;
}
export default async function Home() {
  const billboards = await getBillboards().then((billboards) => {
    return billboards;
  });
  console.log(billboards);
  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      <div className="p-6"></div>
      <div className="text-5xl font-bold text-center  text-white pt-5">
        Find Your Perfect Advertisting Spot
        <SearchBar />
      </div>
      <div className="flex flex-col justify-center my-8">
        <Divider />
      </div>
      <div className="flex flex-col justify-center m-8 px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            billboards &&
              // <Suspense fallback={<div>Loading...</div>}>
              billboards.map((billboard) => (
                <BillboardCard key={billboard.id} billboard={billboard} />
              ))
            // </Suspense>
          }
        </div>
      </div>
    </main>
  );
}
