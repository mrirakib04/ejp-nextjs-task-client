import HeroBanner from "@/components/Home/HeroBanner";
import LatestGames from "@/components/Home/LatestGames";
import HomeFeatures from "@/components/Home/HomeFeatures";
import OurPopularSellers from "@/components/Home/OurPopularSellers";
import OurSupports from "@/components/Home/OurSupports";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroBanner></HeroBanner>
      <LatestGames></LatestGames>
      <HomeFeatures></HomeFeatures>
      <OurPopularSellers></OurPopularSellers>
      <OurSupports></OurSupports>
    </div>
  );
}
