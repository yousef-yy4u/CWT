import axios from "axios";

const BASE_URL = "http://localhost:8000/api/accounts"; // 🔁 Replace with your backend

export const fetchPatients = async () => {
  const response = await axios.get(`${BASE_URL}/patients`);
  return response.data;
};

export const fetchDoctors = async () => {
  const response = await axios.get(`${BASE_URL}/doctors`);
  return response.data;
};
