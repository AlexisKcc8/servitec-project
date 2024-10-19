import { ServitecHero } from "@/pages/ServitecHero";
import { BannerBrand } from "@/myComponents/BannerBrand";
import { ProductCarousel } from "@/pages/ProductCarousel";
// import { PurchaseMethod } from "@/pages/PurchaseMethod";
import { OurServices } from "@/pages/OurServices";
import { DialogModal } from "@/myComponents/DialogModal";
import { IncentivesCarousel } from "@/pages/IncentivesCarousel";
import { BannerMagSafe } from "@/myComponents/BannerMagSafe";

function App() {
  return (
    <>
      <main className="sm:px-36 min-h-screen relative flex flex-col justify-center">
        <ServitecHero />
        <BannerBrand />
        <ProductCarousel />
        {/* <PurchaseMethod /> */} {/*ESTE TIENE PROBLEMAS DE SCROLL VERTICAL*/}
        <IncentivesCarousel />
        <OurServices />
        <BannerMagSafe />
        {/* //modal generico para las cards o componentes que lo necesiten */}
        <DialogModal />
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
