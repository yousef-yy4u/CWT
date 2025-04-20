import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import DashboardLayout from "../layouts/DashboardLayout";
import AdminPanel from "./dashboard/AdminPanel";
import DoctorPanel from "./dashboard/DoctorPanel";
import NursePanel from "./dashboard/NursePanel";
import ReceptionistPanel from "./dashboard/ReceptionistPanel";

function Dashboard() {
  const { user } = useContext(AuthContext);

  const getPanel = () => {
    switch (user?.role) {
      case "admin":
      case "dev": // Dev uses admin panel for now
        return <AdminPanel />;
      case "doctor":
        return <DoctorPanel />;
      case "nurse":
        return <NursePanel />;
      case "receptionist":
        return <ReceptionistPanel />;
      default:
        return <p>Unauthorized role</p>;
    }
  };

  return <DashboardLayout>{getPanel()}</DashboardLayout>;
}

export default Dashboard;
