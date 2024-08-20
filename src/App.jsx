import { Hero } from "@/myComponents/Hero";
import { BannerBrand } from "@/myComponents/BannerBrand";
import { PurchaseMethod } from "@/myComponents/PurchaseMethod";

// import { TopSellingProducts } from "@/myComponents/TopSellingProducts";
import { ProductCarousel } from "@/myComponents/ProductCarousel";

function App() {
  return (
    <>
      <main className="sm:px-36 min-h-screen relative flex flex-col justify-center">
        <Hero />
        <BannerBrand />
        {/* <TopSellingProducts /> */}
        <ProductCarousel />
        <PurchaseMethod />
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
        {/* <div className="wave-container">
          <div className="wave"></div>
          <div className="wave"></div>
        </div> */}
      </main>
    </>
  );
}

export default App;
