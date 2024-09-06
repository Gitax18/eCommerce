import CategoriesSelect from "../ui/CategoriesSelect";

import ProductList from "../feature/home/ProductList";
import { useState } from "react";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default to "all"

  return (
    <div className="min-h-screen max-h-max w-full py-10 px-20">
      <div className="flex items-center justify-between">
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
        {console.log(selectedCategory)}
        <ProductList selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default Home;
