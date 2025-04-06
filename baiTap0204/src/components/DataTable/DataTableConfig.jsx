export const options = {
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
};

export const columns = [
  { data: "name" },
  { data: "company" },
  { data: "orderValue" },
  { data: "orderDate" },
  { data: "status" },
  { data: "id" },
];
