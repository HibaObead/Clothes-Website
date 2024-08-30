import React from 'react'
import Navbar from './assets/components/Navbar/Navbar'
import Hero from './assets/components/Hero/Hero'
import Products from './assets/components/Products/Products'
import TopProducts from "./assets/components/TopProducts/TopProducts"
import Banner from "./assets/components/Banner/Banner"
import Subscrip from './assets/components/Subscrip/Subscrip'
import Testimonials from "./assets/components/Testimonials/Testimonials"
import Footer from './assets/components/Footer/Footer'
import Popup from "./assets/components/Popup/Popup"
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscrip />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};
export default App;