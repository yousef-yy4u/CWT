// src/layouts/SidebarLayout.jsx
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';
import AdminContent from "../components/content/AdminContent";

const DashboardLayout = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [selectedSection, setSelectedSection] = useState("User Management"); // Sidebar selection
  const [activeTab, setActiveTab] = useState(null); 

  const renderContent = (role, section, tab) => {
    if (["admin", "dev"].includes(role)) {
      return <AdminContent section={section} tab={tab} />;
    }
  };
  useEffect(() => {
    const defaultTabs = {
      "User Management": "Patients",
      "Appointment Management": "Calendar",
      Inventory: "Stock Levels",
      "Staff & HR": "Shifts",
      Reports: "Revenue",
      Settings: "Branding"
    };
  
    if (selectedSection && !activeTab) {
      setActiveTab(defaultTabs[selectedSection]);
    }
  }, [selectedSection, activeTab]);

  return (
    <div>
      <TopNavbar
        section={selectedSection}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div style={{height:"20px"}}></div>
      <Sidebar
        role={user?.role}
        section={selectedSection}
        tab={activeTab}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        setActiveTab={setActiveTab}
      />      
    </div>
  );
};

export default DashboardLayout;
