import { useState } from "react";
import * as XLSX from "xlsx";

export const useFile = () => {
  const [importing, setImporting] = useState(false);
  const [importSuccess, setImportSuccess] = useState(false);
  const [importError, setImportError] = useState(null);

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

  const importFromFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      setImporting(true);
      setImportError(null);

      // Read the Excel file
      const reader = new FileReader();

      reader.onload = async (event) => {
        try {
          const data = new Uint8Array(event.target.result);
          const workbook = XLSX.read(data, { type: "array" });

          // Get first sheet
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];

          // Convert to JSON
          const importedData = XLSX.utils.sheet_to_json(worksheet);

          // Process the data to match your API's expected format
          const processedData = importedData.map((item) => ({
            customerName: item["CUSTOMER NAME"],
            company: item["COMPANY"],
            orderValue: item["ORDER VALUE"].toString().replace("$", ""),
            orderDate: item["ORDER DATE"],
            status: item["STATUS"],
          }));

          // Upload the data to your backend API
          await axios.post("your-api-endpoint/import", {
            data: processedData,
          });

          // Show success message
          setImportSuccess(true);
          setTimeout(() => setImportSuccess(false), 3000);

          // Refetch the data to get the latest updates
          await fetchData();
        } catch (error) {
          console.error("Error processing or uploading file:", error);
          setImportError(
            "Failed to process the file. Please check the format and try again."
          );
        } finally {
          setImporting(false);
          // Reset file input
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        }
      };

      reader.onerror = () => {
        setImportError("Failed to read the file.");
        setImporting(false);
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("Import error:", error);
      setImportError("An unexpected error occurred.");
      setImporting(false);
    }
  };

  return {
    exportToExcel,
    importFromFile,
    importing,
    importSuccess,
    importError,
  };
};
