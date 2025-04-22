import { useEffect, useState } from "react";
import { fetchPatients } from "../../../api/usersApi";
import UsersTabLayout from "./UserTabLayout";

const PatientsTab = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPatients()
      .then(data => {
        setPatients(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching patients:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-muted">Loading patients...</p>;
  if (patients.length === 0) return <p className="text-muted">No patient data available.</p>;

  return (
    <>
      {patients.map(patient => (
        <UsersTabLayout key={patient.id} user={patient} />
      ))}
    </>
  );
};

export default PatientsTab;
