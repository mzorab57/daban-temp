import BrandsShowcaseSection from "../components/home/BrandsShowcaseSection";
import ProductsShowcase from "../components/home/ProductsShowcase";
import TradingManufacturingSection from "../components/home/TradingManufacturingSection";
import ProductsHero from "../components/products/ProductsHero";


export default function ProductsPage() {
  return (
    <div className="products-route-page">
      <main className="products-route-main">
        <ProductsHero />
        <ProductsShowcase />
        <BrandsShowcaseSection />
        <TradingManufacturingSection />
      </main>
    </div>
  );
}
