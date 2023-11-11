import BillboardCard from "./components/BillboardCard";
import HeaderBar from "./components/HeaderBar";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full bg-gradient-to-tr from-slate-900 via-slate-500 to-slate-300 h-20">
        <HeaderBar />
      </div>
      <div className="p-6"></div>
      <div className="text-6xl font-bold text-center  text-white px-5">
        Find Your Perfect Advertisting Spot
      </div>
      <div className="flex flex-col justify-center">
        <div className="m-3 p-5">
          <SearchBar />
        </div>
      </div>
      <div className="flex justify-start gap-5">
        <BillboardCard image="DALL·E 2023-11-06 19.58.15 - Visualize a photo-realistic image from the perspective of a driver on a road, looking up at a large billboard advertising a plumbing service. The bill.png" />
        <BillboardCard image="DALL·E 2023-11-06 19.56.33 - Create an image of a towering billboard from the perspective of a person at street level. The billboard features a fictional superhero standing with a.png" />
        <BillboardCard image="DALL·E 2023-11-06 19.58.18 - Visualize a photo-realistic image from the perspective of a driver on a road, looking up at a large billboard advertising a plumbing service. The bill.png" />
        <BillboardCard image="DALL·E 2023-11-06 19.56.21 - Create an image of a towering billboard from the perspective of a person at street level. The billboard features a fictional superhero standing with a.png" />
      </div>
    </main>
  );
}
