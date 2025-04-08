import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCaretDown,
  faCaretUp,
  faDollarSign,
  faGripVertical,
} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStats } from "../hooks/useFetchOverview";

const OverviewCard = ({ title, value, percent, isIncrease, icon }) => {
  return (
    <div
      className={`bg-[#FEF0F5] rounded-lg p-4 flex items-start justify-between w-1/3`}
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
      <button
        className={`border border-[#F44B87] text-[#F44B87] hover:bg-[#F44B87] hover:text-white rounded-lg p-2 w-10`}
      >
        <FontAwesomeIcon icon={icon} />
      </button>
    </div>
  );
};

const Overview = () => {
  const { stats, loading, error } = useStats();

  return (
    <div className="p-6">
      <p>
        <FontAwesomeIcon
          icon={faGripVertical}
          className="text-[#F44B87] mr-2 text-xl"
        />
        <span className="text-xl font-bold">Overview</span>
      </p>

      {loading && <p>Loading stats...</p>}
      {error && <p className="text-red-500">Error loading stats: {error}</p>}

      <div className="mt-4 flex items-center justify-between gap-4">
        {stats &&
          stats.map((item) => (
            <OverviewCard
              key={item.id}
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
            />
          ))}
      </div>
    </div>
  );
};
export default Overview;
