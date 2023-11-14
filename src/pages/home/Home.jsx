import Filter from "../../components/Filter/Filter";
import HeroSection from "../../components/Herosection/HeroSection";
import Layout from "../../components/Layout/Layout";
import Product from "../../components/Product/Product";
import Track from "../../components/Track/Track";
import Testimonial from "../../components/Testimonial/Testimonial";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, deleteFromCart } from "../../redux/CartSlice";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <Product />
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
