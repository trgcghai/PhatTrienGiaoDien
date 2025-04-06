import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { useCreateCustomer } from "../../hooks/useFetchCustomer";

const AddModal = () => {
  const { toggleModal, onSuccess } = useContext(ModalContext);
  const { createCustomer, loading, error } = useCreateCustomer();
  const [formValue, setFormValue] = useState({
    customerName: "",
    companyName: "",
    orderValue: "",
    orderDate: "",
    status: "",
    id: "",
  });

  const handleSubmit = async () => {
    try {
      await createCustomer(formValue);
      toggleModal();

      if (onSuccess && typeof onSuccess === "function") {
        onSuccess();
      }
    } catch (err) {
      // Error handling is done in the hook
      console.error("Error updating customer:", err);
    }
  };

  return (
    <div className="absolute top-[50%] left-[50%] translate-[-50%] z-50 bg-white rounded-lg p-4 min-w-[500px]">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg text-gray-500 font-bold">Create new data</p>
        <FontAwesomeIcon
          className="text-lg text-gray-500 cursor-pointer"
          icon={faXmark}
          onClick={() => toggleModal()}
        />
      </div>

      <div>
        <form action="" method="">
          <div className="mb-4">
            <label htmlFor="" className="block text-md text-gray-500">
              Customer name
            </label>
            <input
              type="text"
              name=""
              id=""
              value={formValue.customerName}
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
              value={formValue.companyName}
              onChange={(e) => {
                setFormValue({ ...formValue, companyName: e.target.value });
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

      {error && <p className="text-red-500 mb-4">Error: {error}</p>}

      <div className="flex justify-end mt-4 gap-2">
        <button
          className="w-[100px] cursor-pointer rounded-lg px-3 py-2 text-lg text-[#F44B87] border border-[#F44B87] bg-white mr-2]"
          onClick={() => toggleModal()}
        >
          Cancel
        </button>
        <button
          className="w-[100px] cursor-pointer rounded-lg px-3 py-2 text-white text-lg bg-[#F44B87]"
          onClick={handleSubmit}
        >
          {loading ? "Saving..." : "Confirm"}
        </button>
      </div>
    </div>
  );
};
export default AddModal;
