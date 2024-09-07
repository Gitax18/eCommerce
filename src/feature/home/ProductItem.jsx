/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { formatNumberIndian } from "../../utils/helper";

function ProductItem({ data }) {
  return (
    <li className="h-[28rem] w-[21rem] bg-slate-100 p-1">
      <img src={data.image} className="w-full h-56" />
      <div className="px-2 py-1">
        <p className="uppercase text-gray-600 tracking-widest">
          {data.category}
        </p>
        <p className="font-bold my-2 text-xl">
          {data.title.split(" ").slice(0, 3).join(" ")}
        </p>
        <strong>₹ {formatNumberIndian(Number(data.price) * 40)}/-</strong>
        <Link
          className="block mt-6 text-blue-500 text-xl"
          to={`/product/${data.id}`}
        >
          View &rarr;
        </Link>
      </div>
    </li>
  );
}

export default ProductItem;
