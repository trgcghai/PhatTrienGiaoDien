import { useState, useEffect, useCallback } from "react";
import api from "../config/AxiosInstance";

export const useCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCustomers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await api.get("/");
      setCustomers(data);
      setError(null);
    } catch (err) {
      setError(err.message || "Failed to fetch customers");
      console.error("Error fetching customers:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  return {
    customers,
    loading,
    error,
    refetch: fetchCustomers,
  };
};

export const useCreateCustomer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createCustomer = async (customerData) => {
    setLoading(true);
    setSuccess(false);
    try {
      const data = await api.post("/", customerData);
      setSuccess(true);
      setError(null);
      return data;
    } catch (err) {
      setError(err.message || "Failed to create customer");
      console.error("Error creating customer:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createCustomer, loading, error, success };
};

export const useUpdateCustomer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const updateCustomer = async (id, customerData) => {
    setLoading(true);
    setSuccess(false);
    try {
      const data = await api.put(`/${id}`, customerData);
      setSuccess(true);
      setError(null);
      return data;
    } catch (err) {
      setError(err.message || "Failed to update customer");
      console.error("Error updating customer:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateCustomer, loading, error, success };
};
