import { useEffect, useState } from "react";
import { fetchDoctors } from "../../../api/usersApi";
import UsersTabLayout from "./UserTabLayout";

const DoctorsTab = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctors()
      .then(data => {
        setDoctors(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching doctors:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-muted">Loading doctors...</p>;
  if (doctors.length === 0) return <p className="text-muted">No doctor data available.</p>;

  return (
    <>
      {doctors.map(doctor => (
        <UsersTabLayout key={doctor.id} user={doctor} />
      ))}
    </>
  );
};

export default DoctorsTab;
