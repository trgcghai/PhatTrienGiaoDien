import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="px-6 py-2 flex items-center justify-between border-b border-gray-300">
      {/* <p className="text-2xl font-bold text-[#F44B87]">Dashboard</p>
      <div className=" flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            className="bg-[#F3F4F6] px-2 py-1 rounded-lg w-80"
            placeholder="Search..."
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[#323842] text-md right-2 top-2 absolute"
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faBell} className="text-[#323842] text-lg" />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faQuestion}
            className="text-[#323842] text-lg"
          />
        </div>
        <div>
          <img src="/Avatar.png" className="h-12 rounded-lg" alt="" />
        </div>
      </div> */}
      header
    </header>
  );
};
export default Header;
