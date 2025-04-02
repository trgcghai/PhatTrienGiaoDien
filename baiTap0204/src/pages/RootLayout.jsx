import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-3">
      <div className="col-span-1 row-span-4">
        <Navbar />
      </div>
      <div className="col-span-3 row-span-4">
        <Outlet />
      </div>
    </div>
  );
};
export default RootLayout;
