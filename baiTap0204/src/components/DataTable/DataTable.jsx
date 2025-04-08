import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import { columns, options } from "./DataTableConfig";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const TableData = ({ data }) => {
  DataTable.use(DT);

  const { toggleModal, handleSetData, setModalType } = useContext(ModalContext);

  return (
    <>
      <DataTable
        data={data && data}
        columns={columns}
        slots={{
          0: (data) => (
            <div className="flex items-center gap-2 py-[16px]">
              <img
                src="/Avatar.png"
                className="w-[36px] h-[36px] rounded-full"
                alt=""
              />
              <p className="text-md font-semibold">{data}</p>
            </div>
          ),
          1: (data) => <p className="text-md">{data}</p>,
          2: (data) => (
            <p className="text-md">$ {Number(data).toLocaleString()}</p>
          ),
          3: (data) => {
            const [year, month, day] = data.split("-");
            const date =
              month?.padStart(0, 2) + "/" + day?.padStart(0, 2) + "/" + year;
            return <p className="text-md">{date}</p>;
          },
          4: (data) => {
            return (
              <div className="flex items-center justify-center">
                <p
                  className={`${
                    data == "New"
                      ? "bg-[#f1f8fd] text-[#99cbf2]"
                      : data == "In-progress"
                      ? "bg-[#fef9ee] text-[#98690c]"
                      : "bg-[#eefdf3] text-[#1e833f]"
                  } text-center font-bold block w-[110px] px-2 py-1 rounded-full`}
                >
                  {data}
                </p>
              </div>
            );
          },
          5: (_, row) => {
            return (
              <div className="flex items-center justify-center">
                <button
                  className="text-gray-400 px-2 cursor-pointer aspect-square hover:bg-[#F44B87] hover:text-white rounded-md"
                  onClick={() => {
                    toggleModal();
                    setModalType("edit");
                    handleSetData(row);
                  }}
                >
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </div>
            );
          },
        }}
        options={options}
      >
        <thead>
          <tr>
            <th className="text-left font-semibold text-[#565E6CFF] text-lg uppercase">
              Customer name
            </th>
            <th className="text-left font-semibold text-[#565E6CFF] text-lg uppercase">
              Company
            </th>
            <th className="text-left font-semibold text-[#565E6CFF] text-lg uppercase">
              Order value
            </th>
            <th className="text-left font-semibold text-[#565E6CFF] text-lg uppercase">
              Order date
            </th>
            <th className="text-center font-semibold text-[#565E6CFF] text-lg uppercase">
              Status
            </th>
            <th className="text-center font-semibold text-[#565E6CFF] text-lg uppercase">
              Edit
            </th>
          </tr>
        </thead>
      </DataTable>
    </>
  );
};
export default TableData;
