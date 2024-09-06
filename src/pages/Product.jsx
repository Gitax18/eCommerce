import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api_Products";
import Loader from "../ui/Loader";
import { formatNumberIndian } from "../utils/helper";
import Error from "../ui/Error";

function Product() {
  const { id } = useParams();

  // Use React Query to fetch product data by ID
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id], // Unique queryKey for product by ID
    queryFn: () => getProductById(id), // Fetch product by ID
  });

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <>
      <div className="absolute top-[6rem] left-6">
        <span>CATEGORY &gt; {data.product.category.toUpperCase()} </span>
      </div>
      <div className="text-center">
        <img src={data.product.image} className="h-[34rem] m-auto" />
        <h1 className="text-3xl font-black w-[60%] m-auto border-b-2 pb-6">
          {data.product.title}
        </h1>
        <div className="my-10 flex  w-[24rem] items-center justify-between mx-auto">
          <p className="text-2xl font-black">
            ₹ {formatNumberIndian(Number(data.product.price) * 40)}/-
          </p>
          <button className="border-blue-600 border-2 p-2 bg-blue-200">
            add to cart
          </button>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Description</h3>
          <p className="w-[60%] mx-auto text-xl tracking-wide my-4">
            {data.product.description}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Model</h3>
          <p className="w-[60%] mx-auto text-xl tracking-wide my-4">
            {data.product.model}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Color</h3>
          <p className="w-[60%] mx-auto text-xl tracking-wide my-4">
            {data.product.color.toUpperCase()}
          </p>
        </div>
      </div>
    </>
  );
}

export default Product;
