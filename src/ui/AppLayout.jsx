import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Loader from "../ui/Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading) return <Loader />;
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
