/* eslint-disable react/prop-types */
import { formatNumberIndian } from "../../utils/helper";

function CheckoutItem({ item }) {
  return (
    <li className="flex items-center justify-between pr-3 bg-gray-100">
      <div className="flex items-center  gap-x-4">
        <img src={item.image} alt={item.title} className="h-20 rounded-lg" />
        <div>
          <p className="text-xl font-semibold">
            {item.title.split(" ").slice(0, 3).join(" ")}
          </p>
          <p className="text-xl font-semibold">
            ₹ {formatNumberIndian(Number(item.price) * 40)}
            /-
          </p>
        </div>
      </div>
      <p className="text-xl font-bold mr-1">x{item.quantity}</p>
    </li>
  );
}

export default CheckoutItem;
