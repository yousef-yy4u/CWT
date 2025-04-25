import { useEffect, useState } from "react";
import { fetchPatients} from "../../../api/usersApi";
import UsersTabLayout from "./UserTabLayout";

const PatientsTab = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPatients()
      .then(data => {
        setUsers(data.filter(user => user.role === "patient"));
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center w-100" style={{ minHeight: "70vh" }}>
      <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
  if (users.length === 0) return <UsersTabLayout><p className="text-muted">No user data available.</p>;</UsersTabLayout>

  return (
    <>
      {users.map(user => (
        <UsersTabLayout key={user.id} user={user} />
      ))}
    </>
  );
};

export default PatientsTab;
