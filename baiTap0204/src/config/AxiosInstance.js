import axios from "axios";

// Create base instance with default configuration
const api = axios.create({
  baseURL:
    "https://66eee7fa3ed5bb4d0bf24f82.mockapi.io/api/v1/vocabularyDB/customer",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
