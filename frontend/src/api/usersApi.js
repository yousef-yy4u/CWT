import axios from "axios";
import BASE_URL from "./apiConfig";

// Use this to fetch AppUsers (patients, doctors, etc.)
export const fetchUsers = async () => {
  const response = await axios.get(`${BASE_URL}/api/users/`);
  return response.data;
};

// Example: fetch only doctors (you can filter this server-side later)
export const fetchDoctors = async () => {
  const response = await axios.get(`${BASE_URL}/api/users/`);
  return response.data.filter(user => user.role.name === "doctor");
};
