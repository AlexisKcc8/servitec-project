import { Hero } from "@/myComponents/Hero";
import { BannerBrand } from "@/myComponents/BannerBrand";
import { PurchaseMethod } from "@/myComponents/PurchaseMethod";
import { ButtonLinkWhatsApp } from "@/myComponents/ButtonLinkWhatsApp";

function App() {
  return (
    <>
      <main className="sm:px-36 min-h-screen relative flex flex-col justify-center">
        <Hero />
        <BannerBrand />
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
        <ButtonLinkWhatsApp />
      </main>
    </>
  );
}

export default App;
