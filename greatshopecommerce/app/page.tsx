import { Button } from "@/components/ui/button";
import Image from "next/image";
import CarouselBanner from "@/components/carouselBanner";
import FeaturesProducts from "@/components/featuresProducts";
import Products from "@/service/useProducts";
export default function Home() {
  return (
    <main>
      <CarouselBanner />
      <FeaturesProducts />
    </main>
  );
}
