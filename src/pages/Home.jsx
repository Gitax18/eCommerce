import CategoriesSelect from "../ui/CategoriesSelect";

import ProductList from "../feature/home/ProductList";
import { useState } from "react";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default to "all"

  return (
    <div className="min-h-screen max-h-max w-full py-10 px-5 md:px-10">
      <div className="flex  justify-between flex-col md:items-center md:flex-row">
        <h1 className="font-bold text-3xl text-gray-800">Our Products</h1>
        <span className="flex gap-4">
          <strong>Categories:</strong>
          <CategoriesSelect
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </span>
      </div>
      <div className="">
        <ProductList selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default Home;
