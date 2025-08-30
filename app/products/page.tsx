import ProductsHero from "../../components/products/ProductsHero";
import ProductGrid from "../../components/products/ProductGrid";
import ServiceCategories from "../../components/products/ServiceCategories";
import Pricing from "../../components/products/Pricing";

export const metadata = {
  title: 'Products & Services - GroowByTech',
  description: 'Explore our comprehensive range of website solutions for schools and businesses. Ready-to-deploy, reliable, and customizable.',
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <ProductsHero />
      <ServiceCategories />
      <ProductGrid />
      <Pricing />
    </main>
  );
}