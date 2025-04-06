import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faFileExport, faFileImport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import TableData from "../components/DataTable/DataTable";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://66eee7fa3ed5bb4d0bf24f82.mockapi.io/api/v1/vocabularyDB/customer"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faFile}
            className="text-[#F44B87] text-lg mr-2"
          />
          <p className="font-bold text-lg">Detailed report</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="border border-[#F44B87] text-[#F44B87] rounded-lg p-2">
            <FontAwesomeIcon icon={faFileImport} className="mr-2" />
            Import
          </button>
          <button className="border border-[#F44B87] text-[#F44B87] rounded-lg p-2">
            <FontAwesomeIcon icon={faFileExport} className="mr-2" />
            Export
          </button>
        </div>
      </div>

      <div>{data && data.length != 0 && <TableData data={data} />}</div>
    </div>
  );
};
export default HomePage;
