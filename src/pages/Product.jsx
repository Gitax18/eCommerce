import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api_Products";
import Loader from "../ui/Loader";
import Error from "../ui/Error";
import ProductTitle from "../feature/product/ProductTitle";
import PriceCart from "../feature/product/PriceCart";
import ProductDetails from "../feature/product/ProductDetails";
import NotLoginModal from "../feature/product/NotLoginModal";
import { useState } from "react";

function Product() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const isLogin = JSON.parse(localStorage.getItem("userdata"));

  // Use React Query to fetch product data by ID
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id], // Unique queryKey for product by ID
    queryFn: () => getProductById(id), // Fetch product by ID
  });

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <>
      {showModal && <NotLoginModal />}
      <div className="absolute top-[5rem] left-2 md:top-[6rem] md:left-6">
        <span>CATEGORY &gt; {data.product.category.toUpperCase()} </span>
      </div>
      <div className="text-center m-auto max-w-screen-2xl w-min-full">
        <ProductTitle data={data} />
        <PriceCart data={data} isLogin={isLogin} setShowModal={setShowModal} />
        <ProductDetails data={data} />
      </div>
    </>
  );
}

export default Product;
