import { Divider } from "@nextui-org/react";
import BillboardCard from "./components/BillboardCard";
import SearchBar from "./components/SearchBar";

export default function Home() {
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
      <div className="flex justify-start gap-5">
        <BillboardCard
          title="Super Billboard"
          chipType="Digital"
          image="DALL·E 2023-11-06 19.58.15 - Visualize a photo-realistic image from the perspective of a driver on a road, looking up at a large billboard advertising a plumbing service. The bill.png"
        />
        <BillboardCard
          title="Decent Billboard"
          chipType="Static"
          image="DALL·E 2023-11-06 19.56.33 - Create an image of a towering billboard from the perspective of a person at street level. The billboard features a fictional superhero standing with a.png"
        />
        <BillboardCard
          title="Spectacular Billboard"
          chipType="Static"
          image="DALL·E 2023-11-06 19.58.18 - Visualize a photo-realistic image from the perspective of a driver on a road, looking up at a large billboard advertising a plumbing service. The bill.png"
        />
        <BillboardCard
          title="Good Billboard"
          chipType="Digital"
          image="DALL·E 2023-11-06 19.56.21 - Create an image of a towering billboard from the perspective of a person at street level. The billboard features a fictional superhero standing with a.png"
        />
      </div>
    </main>
  );
}
