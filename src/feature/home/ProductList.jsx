import { useQuery } from "@tanstack/react-query";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import ProductItem from "./ProductItem";
import {
  getAllProducts,
  getProductsByCategory,
} from "../../services/api_Products";

function ProductList({ selectedCategory }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      if (selectedCategory === "all") return getAllProducts();
      else return getProductsByCategory(selectedCategory);
    },
  });

  if (isLoading) return <Loader />;

  if (isError) return <Error />;

  return (
    <ul className="flex flex-wrap items-center justify-between gap-y-8 p-2 my-8">
      {data.products.map((item) => (
        <ProductItem data={item} key={item.id} />
      ))}
    </ul>
  );
}

export default ProductList;
