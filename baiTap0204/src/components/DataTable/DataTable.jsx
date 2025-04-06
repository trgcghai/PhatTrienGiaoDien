import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableData = ({ data }) => {
  DataTable.use(DT);

  const columns = [
    { data: "name" },
    { data: "company" },
    { data: "orderValue" },
    { data: "orderDate" },
    { data: "status" },
    { data: "id" },
  ];

  return (
    <DataTable
      data={data}
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
        4: (data) => {
          if (data == "New") {
            return (
              <div className="flex items-center justify-center">
                <p className="bg-[#f1f8fd] text-[#99cbf2] text-center block w-[50px] px-2 py-1 rounded-full">
                  {data}
                </p>
              </div>
            );
          } else if (data == "In-progress") {
            return (
              <div className="flex items-center justify-center">
                <p className="bg-[#fef9ee] text-[#98690c] text-center block w-[100px] px-2 py-1 rounded-full">
                  {data}
                </p>
              </div>
            );
          } else if (data == "Completed") {
            return (
              <div className="flex items-center justify-center">
                <p className="bg-[#eefdf3] text-[#1e833f] text-center block w-[100px] px-2 py-1 rounded-full">
                  {data}
                </p>
              </div>
            );
          }
        },
        5: (_, row) => {
          return (
            <div className="flex items-center justify-center">
              <button
                className="text-gray-400 px-2 cursor-pointer aspect-square rounded-sm border-2 border-gray-300"
                onClick={() => console.log(row)}
              >
                <FontAwesomeIcon icon={faPen} />
              </button>
            </div>
          );
        },
      }}
      options={{
        paging: true,
        lengthChange: false,
        searching: false,
        ordering: true,
        pageLength: 6,
        dom: '<"top"lf>rt<"bottom d-flex align-items-center justify-content-between"ip><"clear">',
        language: {
          info: "_TOTAL_ results",
        },
        pagingType: "simple_numbers",
        renderer: {
          pageButton: "bootstrap",
        },
      }}
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
  );
};
export default TableData;
