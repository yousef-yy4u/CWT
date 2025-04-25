import axios from "axios";
import BASE_URL from "./apiConfig";

// Use this to fetch AppUsers (patients, doctors, etc.)
export const fetchUsers = async () => {
  const response = await axios.get(`${BASE_URL}/api/users/`);
  return response.data;
};

// Example: fetch only doctors (you can filter this server-side later)

export const fetchDoctors = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://127.0.0.1:8000/api/users/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };

  export const fetchPatients = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://127.0.0.1:8000/api/users/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };
