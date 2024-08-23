import { Hero } from "@/myComponents/Hero";
import { BannerBrand } from "@/myComponents/BannerBrand";
import { ProductCarousel } from "@/myComponents/ProductCarousel";
import { PurchaseMethod } from "@/myComponents/PurchaseMethod";
import { OurServices } from "@/myComponents/OurServices";

function App() {
  return (
    <>
      <main className="sm:px-36 min-h-screen relative flex flex-col justify-center">
        <Hero />
        <BannerBrand />
        <ProductCarousel />
        <PurchaseMethod />
        <OurServices />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
}

export default App;
