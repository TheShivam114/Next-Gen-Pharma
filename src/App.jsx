import CompanyIntro from "./components/home/CompanyIntro";
import Franchise from "./components/home/Franchise";
import Hero from "./components/home/Hero";
import Navbar from "./components/home/layout/Navbar";
// import ProductCard from "./components/home/ProductCard";
import ProductCategories from "./components/home/ProductCategories";
import WhyChooseUs from "./components/home/WhyChooseUs";

function App() {
  return (
   
    <div>
     <Hero/>
     <CompanyIntro/>
     <ProductCategories/>
     <Franchise/>
     <Navbar/>
     <WhyChooseUs/>
    </div>
  );
}

export default App;