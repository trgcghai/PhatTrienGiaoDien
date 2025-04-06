import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContext";

const EditModal = () => {
  const { toggleModal, data } = useContext(ModalContext);
  const [formValue, setFormValue] = useState({
    name: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "",
  });

  console.log(data);

  function formatDateToISO(dateStr) {
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  useEffect(() => {
    setFormValue({
      ...data,
      orderValue: data.orderValue.replace("$", ""),
      orderDate: formatDateToISO(data.orderDate),
    });
  }, [data]);

  return (
    <div className="absolute top-[50%] left-[50%] translate-[-50%] z-50 bg-white rounded-lg p-4 min-w-[500px]">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg text-gray-500 font-bold">Edit info</p>
        <FontAwesomeIcon
          className="text-lg text-gray-500 cursor-pointer"
          icon={faXmark}
          onClick={() => toggleModal()}
        />
      </div>

      <div>
        <form action="">
          <div className="mb-4">
            <label htmlFor="" className="block text-md text-gray-500">
              Customer name
            </label>
            <input
              type="text"
              name=""
              id=""
              value={formValue.name}
              onChange={(e) => {
                setFormValue({
                  ...formValue,
                  customerName: e.target.value,
                });
              }}
              className="border-[1px] border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-md text-gray-500">
              Company
            </label>
            <input
              type="text"
              name=""
              id=""
              value={formValue.company}
              onChange={(e) => {
                setFormValue({ ...formValue, company: e.target.value });
              }}
              className="border-[1px] border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-md text-gray-500">
              Order value
            </label>
            <input
              type="text"
              name=""
              id=""
              value={formValue.orderValue}
              onChange={(e) => {
                setFormValue({ ...formValue, orderValue: e.target.value });
              }}
              className="border-[1px] border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-md text-gray-500">
              Order date
            </label>
            <input
              type="date"
              name=""
              id=""
              value={formValue.orderDate}
              onChange={(e) => {
                setFormValue({ ...formValue, orderDate: e.target.value });
              }}
              className="border-[1px] border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-md text-gray-500">
              Status
            </label>
            <select
              name=""
              id=""
              value={formValue.status}
              onChange={(e) => {
                setFormValue({ ...formValue, status: e.target.value });
              }}
              className="border-[1px] border-gray-300 rounded-lg py-2 w-full"
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </form>
      </div>

      <div className="flex justify-end mt-4 gap-2">
        <button
          className="w-[100px] cursor-pointer rounded-lg px-3 py-2 text-lg text-[#F44B87] border border-[#F44B87] bg-white mr-2]"
          onClick={() => toggleModal()}
        >
          Cancel
        </button>
        <button className="w-[100px] cursor-pointer rounded-lg px-3 py-2 text-white text-lg bg-[#F44B87]">
          Confirm
        </button>
      </div>
    </div>
  );
};
export default EditModal;
