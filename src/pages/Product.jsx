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
      <div className="absolute top-[5rem] left-2 md:top-[6rem] md:left-6">
        <span>CATEGORY &gt; {data.product.category.toUpperCase()} </span>
      </div>
      <div className="text-center m-auto max-w-screen-2xl w-min-full">
        <img
          src={data.product.image}
          className="h-[24rem] m-auto mt-8 md:h-[34rem] "
        />
        <h1 className=" text-2xl px-2 font-bold md:w-[60%] m-auto border-b-2 pb-6 md:font-black md:text-3xl ">
          {data.product.title}
        </h1>
        <div className="my-10 px-8 flex  w-full items-center justify-between mx-auto md:w-[50%]">
          <p className="text-2xl font-black">
            ₹ {formatNumberIndian(Number(data.product.price) * 40)}/-
          </p>
          <button className="border-blue-600 border-2 p-2 bg-blue-200">
            add to cart
          </button>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Description</h3>
          <p className=" mx-auto text-xl tracking-wide px-4 my-4 md:w-[60%]">
            {data.product.description}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Model</h3>
          <p className="w-[60%] mx-auto text-xl tracking-wide my-4">
            {data.product.model}
          </p>
        </div>
        {data.product.color && (
          <div>
            <h3 className="text-2xl font-semibold">Color</h3>
            <p className="w-[60%] mx-auto text-xl tracking-wide my-4">
              {data.product.color?.toUpperCase()}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
