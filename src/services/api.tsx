// import axios from "axios";
// import { API_BASE_URL } from "@env";

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// const fakeStoreApi = axios.create({
//   baseURL: "https://fakestoreapi.com",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export const fetchProducts = async () => {
//   try {
//     const response = await fakeStoreApi.get("/products");
//     return response.data;
//   } catch (error) {
//     const errorMessage =
//       error.response?.data?.message || "Failed to fetch products";
//     throw new Error(errorMessage);
//   }
// };

// export const loginUser = async (username: string, password: string) => {
//   try {
//     console.log("API_BASE_URL: ", API_BASE_URL);

//     console.log("credentials data: ", { username, password });

//     const response = await api.post("/auth/login", { username, password });
//     console.log("Response", response.data);

//     return response.data;
//   } catch (error) {
//     const errorMessage = error.response?.data?.message || "Login failed";
//     throw new Error(errorMessage);
//   }
// };
import axios from "axios";

const API_BASE_URL = "https://dummyjson.com";
const FAKE_STORE_API_BASE_URL = "https://fakestoreapi.com";

export const loginUser = async (username: string, password: string) => {
  try {
    console.log("credentials data:", { username, password });

    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      username,
      password,
    });

    console.log("Login Response:", response.data);
    return response.data;
  } catch (error) {
    const errorMessage =
      (error as any).response?.data?.message || "Login failed";
    throw new Error(errorMessage);
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${FAKE_STORE_API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    const errorMessage =
      (error as any).response?.data?.message || "Failed to fetch products";
    throw new Error(errorMessage);
  }
};
