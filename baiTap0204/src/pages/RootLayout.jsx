import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Overview from "../components/Overview";

const RootLayout = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-3">
      <div className="col-span-1 row-span-4">
        <Navbar />
      </div>
      <div className="col-span-4 row-span-4">
        <Header />
        <Overview />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default RootLayout;
