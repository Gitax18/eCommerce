import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategories } from "../services/api_Products";
import Loader from "./Loader";
import Error from "./Error";

/* eslint-disable react/prop-types */
function CategoriesSelect({ selectedCategory, setSelectedCategory }) {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  async function changingCategory(category) {
    setSelectedCategory(category);
    return null;
  }

  async function handleCategoryChange(e) {
    const category = e.target.value;
    await changingCategory(category);
    queryClient.invalidateQueries({ queryKey: ["products"] });
  }

  if (isLoading) return <Loader />;

  if (isError) return <Error />;

  return (
    <select
      name="categories"
      onChange={handleCategoryChange}
      value={selectedCategory}
    >
      <option value="all" key={crypto.randomUUID()}>
        ALL
      </option>
      {data.categories.map((item) => (
        <option value={item.toLowerCase()} key={crypto.randomUUID()}>
          {item.toUpperCase()}
        </option>
      ))}
    </select>
  );
}

export default CategoriesSelect;
