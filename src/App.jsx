import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Square from "./components/Square/Square";
import Products from "./components/products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 200,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Square />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
