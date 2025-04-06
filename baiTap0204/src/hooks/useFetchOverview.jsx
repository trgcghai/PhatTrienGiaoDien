import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const useStats = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://67dfef6b7635238f9aabca61.mockapi.io/static/"
      );
      setStats(response.data);
      setError(null);
    } catch (err) {
      setError(err.message || "Failed to fetch stats");
      console.error("Error fetching stats:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return {
    stats,
    loading,
    error,
    refetch: fetchStats,
  };
};
