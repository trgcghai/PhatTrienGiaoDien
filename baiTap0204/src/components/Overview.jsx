import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCaretDown,
  faCaretUp,
  faDollarSign,
  faGripVertical,
} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const OverviewCard = ({
  title,
  value,
  percent,
  isIncrease,
  icon,
  bgColor,
  buttonColor,
}) => {
  return (
    <div
      className={`bg-[${bgColor}] rounded-lg p-4 flex items-start justify-between w-1/3`}
    >
      <div className="space-y-3">
        <p className="font-bold text-lg">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-gray-400">
          <FontAwesomeIcon
            icon={isIncrease ? faCaretUp : faCaretDown}
            className={`${isIncrease ? "text-green-400" : "text-red-400"} pt-1`}
          />
          <span className={`${isIncrease ? "text-green-400" : "text-red-400"}`}>
            {" "}
            {percent}
          </span>
          <span> periods of change</span>
        </p>
      </div>
      <button className={`border border-[${buttonColor}] rounded-lg p-2 w-10`}>
        <FontAwesomeIcon icon={icon} className={`text-[${buttonColor}]`} />
      </button>
    </div>
  );
};

const Overview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://67dfef6b7635238f9aabca61.mockapi.io/static/"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  });

  return (
    <div className="p-6">
      <p>
        <FontAwesomeIcon
          icon={faGripVertical}
          className="text-[#F44B87] mr-2 text-xl"
        />
        <span className="text-xl font-bold">Overview</span>
      </p>

      <div className="mt-4 flex items-center justify-between gap-4">
        {data &&
          data.map((item, index) => (
            <OverviewCard
              title={item.title}
              value={item.total}
              percent={item.percent + "%"}
              isIncrease={true}
              icon={
                item.title == "Profit"
                  ? faDollarSign
                  : item.title == "New customer"
                  ? faCircleUser
                  : faCartShopping
              }
              bgColor={index == 0 ? "#FEF0F5" : "#F0F6FF"}
              buttonColor={index == 0 ? "#F44B87" : "#2B80FF"}
            />
          ))}
      </div>
    </div>
  );
};
export default Overview;
