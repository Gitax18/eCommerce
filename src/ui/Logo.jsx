import { Link } from "react-router-dom";

import logo from "/logo.png";

function Logo() {
  return (
    <Link to="/">
      <div className="inline-flex items-center justify-between gap-4 p-1 w-max ">
        <img src={logo} alt="logo" className="w-12 h-12" />
        <h1 className="font-medium text-2xl">BlueShop</h1>
      </div>
    </Link>
  );
}

export default Logo;
