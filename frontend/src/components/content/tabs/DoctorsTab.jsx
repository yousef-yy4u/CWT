import { useEffect, useState } from "react";
import { fetchDoctors } from "../../../api/usersApi";
import UsersTabLayout from "./UserTabLayout";

const DoctorsTab = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctors()
      .then(data => {
        setUsers(data.filter(user => user.role.name === "doctor"));
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-muted">Loading users...</p>;
  if (users.length === 0) return <p className="text-muted">No user data available.</p>;

  return (
    <>
      {users.map(user => (
        <UsersTabLayout key={user.id} user={user} />
      ))}
    </>
  );
};

export default DoctorsTab;
