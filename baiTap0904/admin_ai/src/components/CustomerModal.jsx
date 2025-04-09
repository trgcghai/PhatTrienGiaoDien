import { useState, useEffect } from "react";
import { X } from "lucide-react";

const CustomerModal = ({ isOpen, onClose, onSave, title, customer }) => {
  const [formData, setFormData] = useState(customer);

  // Cập nhật formData khi customer thay đổi
  useEffect(() => {
    setFormData(customer);
  }, [customer]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "Tên khách hàng không được để trống";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Tên công ty không được để trống";
    }

    if (!formData.orderValue.toString().trim()) {
      newErrors.orderValue = "Giá trị đơn hàng không được để trống";
    } else if (isNaN(formData.orderValue)) {
      newErrors.orderValue = "Giá trị đơn hàng phải là số";
    }

    if (!formData.orderDate.trim()) {
      newErrors.orderDate = "Ngày đặt hàng không được để trống";
    }

    console.log("Errors:", newErrors); // Debugging line to check errors

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Chuyển đổi orderValue thành số nếu là chuỗi
    const processedData = {
      ...formData,
      orderValue: formData.orderValue.toString().replace(/^\$/, ""), // Loại bỏ ký tự $ nếu có
    };

    onSave(processedData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-6">{title}</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Customer Name
              </label>
              <input
                type="text"
                id="name"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label
                htmlFor="orderValue"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Order Value
              </label>
              <input
                type="text"
                id="orderValue"
                name="orderValue"
                value={formData.orderValue}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label
                htmlFor="orderDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Order Date
              </label>
              <input
                type="date"
                id="orderDate"
                name="orderDate"
                value={formData.orderDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="DD/MM/YYYY"
                required
              />
            </div>

            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="New">New</option>
                <option value="In-progress">In-progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerModal;
