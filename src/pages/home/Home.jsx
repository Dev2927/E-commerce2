import Filter from "../../components/Filter/Filter";
import HeroSection from "../../components/Herosection/HeroSection";
import Layout from "../../components/Layout/Layout";
import Product from "../../components/Product/Product";
import Track from "../../components/Track/Track";
import Testimonial from "../../components/Testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/CartSlice";

function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"));
  };

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };

  return (
    <Layout>
      <div className="flex gap-5 justify-center">
        <button className="bg-gray-300 p-5" onClick={() => addCart()}>
          Add
        </button>
        <button className="bg-gray-300 p-5" onClick={() => deleteCart()}>
          Del
        </button>
      </div>
      <HeroSection />
      <Filter />
      <Product />
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
