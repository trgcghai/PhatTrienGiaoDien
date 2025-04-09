"use client";

import { useEffect, useState, useMemo } from "react";
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table";
import {
  Edit,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Plus,
  Download,
} from "lucide-react";
import axios from "axios";

const DetailedReport = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://66eee7fa3ed5bb4d0bf24f82.mockapi.io/api/v1/vocabularyDB/customer"
        );
        const formattedData = response.data.map((user) => ({
          ...user,
          avatar: "/Avatar.png",
        }));

        setData(formattedData);
        setTotalResults(formattedData.length);
        setLoading(false);
      } catch (err) {
        setError("Không thể tải dữ liệu. Vui lòng thử lại sau.");
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const getStatusClass = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-600";
      case "In-progress":
        return "bg-yellow-100 text-yellow-600";
      case "Completed":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "CUSTOMER NAME",
        accessor: "name",
        Cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src={row.original.avatar || "/placeholder.svg"}
                alt={row.original.name}
              />
            </div>
            <span>{row.original.customerName}</span>
          </div>
        ),
      },
      {
        Header: "COMPANY",
        accessor: "companyName",
      },
      {
        Header: "ORDER VALUE",
        accessor: "orderValue",
      },
      {
        Header: "ORDER DATE",
        accessor: "orderDate",
      },
      {
        Header: "STATUS",
        accessor: "status",
        Cell: ({ value }) => (
          <span
            className={`px-2 py-1 rounded-full text-xs ${getStatusClass(
              value
            )}`}
          >
            {value}
          </span>
        ),
      },
      {
        Header: "",
        id: "actions",
        Cell: () => (
          <button className="text-gray-400 hover:text-gray-600">
            <Edit size={18} />
          </button>
        ),
        width: 40,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 6 },
    },
    useSortBy,
    usePagination,
    useRowSelect
  );

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <div className="text-center text-red-500">
          <p>{error}</p>
          <button
            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            onClick={() => window.location.reload()}
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  const handleExport = () => {
    // Tạo dữ liệu CSV
    const headers = [
      "Customer Name",
      "Company",
      "Order Value",
      "Order Date",
      "Status",
      "Email",
      "Phone",
    ];
    const csvData = [
      headers.join(","),
      ...data.map((item) =>
        [
          item.customerName,
          item.companyName,
          item.orderValue,
          item.orderDate,
          item.status,
          item.email,
          item.phone,
        ].join(",")
      ),
    ].join("\n");

    // Tạo blob và download
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "customer_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-pink-500 mr-2 flex items-center justify-center">
            <div className="w-3 h-3 bg-white"></div>
          </div>
          <h2 className="text-xl font-bold">Detailed report</h2>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-4 py-2 border border-pink-500 rounded-lg text-pink-500 hover:bg-pink-50">
            <Plus size={16} />
            <span>Import</span>
          </button>
          <button
            className="flex items-center gap-1 px-4 py-2 border border-pink-500 rounded-lg text-pink-500 hover:bg-pink-50"
            onClick={handleExport}
          >
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table {...getTableProps()} className="w-full">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  className="border-b border-gray-200"
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="p-4 text-left text-gray-500 font-medium"
                      style={{ width: column.width }}
                      key={column.id}
                    >
                      <div className="flex items-center">
                        {column.render("Header")}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <ChevronDown className="ml-1 h-4 w-4" />
                            ) : (
                              <ChevronUp className="ml-1 h-4 w-4" />
                            )
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className="border-b border-gray-200 hover:bg-gray-50"
                    key={row.id}
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="p-4"
                        key={cell.id}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-500">{totalResults} kết quả</div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className={`w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 ${
                !canPreviousPage
                  ? "text-gray-300"
                  : "text-gray-400 hover:bg-gray-100"
              }`}
            >
              <ChevronLeft size={16} />
            </button>

            {pageOptions.map((page, index) => {
              // Hiển thị tối đa 5 nút trang
              if (
                index === 0 || // Trang đầu tiên
                index === pageCount - 1 || // Trang cuối cùng
                (index >= pageIndex - 1 && index <= pageIndex + 1) // Trang hiện tại và 1 trang trước/sau
              ) {
                return (
                  <button
                    key={index}
                    onClick={() => gotoPage(index)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      pageIndex === index
                        ? "bg-pink-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              }

              // Hiển thị dấu ... nếu có khoảng cách
              if (
                (index === 1 && pageIndex > 2) ||
                (index === pageCount - 2 && pageIndex < pageCount - 3)
              ) {
                return (
                  <span key={index} className="px-1">
                    ...
                  </span>
                );
              }

              return null;
            })}

            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className={`w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 ${
                !canNextPage
                  ? "text-gray-300"
                  : "text-gray-400 hover:bg-gray-100"
              }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedReport;
