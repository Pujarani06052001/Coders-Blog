import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  },
});

// CATEGORIES
export const fetchCategories = async () => {
  return api.get("/api/categories");
};
