"use client";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const API_URL =
  "https://66eee7fa3ed5bb4d0bf24f82.mockapi.io/api/v1/vocabularyDB/customer";

export const useCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

  const fetchCustomers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(API_URL);
      setCustomers(response.data);
      setTotalResults(response.data.length);
      setLoading(false);
    } catch (err) {
      setError("Không thể tải dữ liệu. Vui lòng thử lại sau.");
      setLoading(false);
      console.error("Error fetching customers:", err);
    }
  }, []);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  const addCustomer = async (newCustomer) => {
    try {
      setLoading(true);
      const response = await axios.post(API_URL, newCustomer);
      setCustomers((prev) => [response.data, ...prev]);
      setTotalResults((prev) => prev + 1);
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      setError("Không thể thêm khách hàng. Vui lòng thử lại sau.");
      setLoading(false);
      console.error("Error adding customer:", err);
      return { success: false, error: err.message };
    }
  };

  const updateCustomer = async (id, updatedCustomer) => {
    try {
      setLoading(true);
      const response = await axios.put(`${API_URL}/${id}`, updatedCustomer);
      setCustomers((prev) =>
        prev.map((customer) => (customer.id === id ? response.data : customer))
      );
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      setError("Không thể cập nhật khách hàng. Vui lòng thử lại sau.");
      setLoading(false);
      console.error("Error updating customer:", err);
      return { success: false, error: err.message };
    }
  };

  const deleteCustomer = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${API_URL}/${id}`);
      setCustomers((prev) => prev.filter((customer) => customer.id !== id));
      setTotalResults((prev) => prev - 1);
      setLoading(false);
      return { success: true };
    } catch (err) {
      setError("Không thể xóa khách hàng. Vui lòng thử lại sau.");
      setLoading(false);
      console.error("Error deleting customer:", err);
      return { success: false, error: err.message };
    }
  };

  const refreshCustomers = () => {
    fetchCustomers();
  };

  return {
    customers,
    loading,
    error,
    totalResults,
    addCustomer,
    updateCustomer,
    deleteCustomer,
    refreshCustomers,
  };
};
