import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faFileExport, faFileImport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableData from "../components/DataTable/DataTable";
import { useCustomers } from "../hooks/useFetchCustomer";
import { ModalContext } from "../context/ModalContext";
import { useContext, useEffect } from "react";
import { useFile } from "../hooks/useFile";

const HomePage = () => {
  const { customers, loading, error, refetch } = useCustomers();
  const { exportToExcel } = useFile();
  const { setOnSuccess } = useContext(ModalContext);

  useEffect(() => {
    setOnSuccess(() => refetch);

    // Clean up khi component unmount
    return () => setOnSuccess(null);
  }, [refetch, setOnSuccess]);

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
          <button className="border cursor-pointer border-[#F44B87] text-[#F44B87] rounded-lg p-2">
            <FontAwesomeIcon icon={faFileImport} className="mr-2" />
            Import
          </button>
          <button
            className="border cursor-pointer border-[#F44B87] text-[#F44B87] rounded-lg p-2"
            onClick={() => {
              exportToExcel(customers.data);
            }}
          >
            <FontAwesomeIcon icon={faFileExport} className="mr-2" />
            Export
          </button>
        </div>
      </div>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {customers && <TableData data={customers.data} />}
      </div>
    </div>
  );
};
export default HomePage;
