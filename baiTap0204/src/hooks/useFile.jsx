import * as XLSX from "xlsx";

export const useFile = () => {
  const exportToExcel = (data) => {
    const exportData = data.map((item) => ({
      "CUSTOMER NAME": item.customerName,
      COMPANY: item.companyName,
      "ORDER VALUE": item.orderValue,
      "ORDER DATE": item.orderDate,
      STATUS: item.status,
    }));

    // Create worksheet
    const worksheet = XLSX.utils.json_to_sheet(exportData);

    // Add some styling to headers
    const range = XLSX.utils.decode_range(worksheet["!ref"]);
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const address = XLSX.utils.encode_cell({ r: 0, c: C });
      worksheet[address].s = { font: { bold: true } };
    }

    // Create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, "export.xlsx");
  };

  return {
    exportToExcel,
  };
};
