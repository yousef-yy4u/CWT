import PatientsTab from "./tabs/PatientsTab";

// src/components/content/AdminContent.jsx
const AdminContent = ({ section, tab }) => {
  
    if (section === "User Management") {
      switch (tab) {
        case "Patients":
          return <PatientsTab></PatientsTab>;
        case "Doctors":
          return <p>📁 Doctors Component</p>;
        case "Staff":
          return <p>📁 Staff Component</p>;
        case "RBAC":
          return <p>🔐 Role-Based Access Control Component</p>;
        default:
          return <p>Unknown tab</p>;
      }
    }
  
    if (section === "Appointment Management") {
      switch (tab) {
        case "Calendar":
          return <p>📅 Calendar View</p>;
        case "Walk-ins":
          return <p>🚶 Walk-in Queue</p>;
        case "Reminders":
          return <p>🔔 Reminders Settings</p>;
        default:
          return <p>Unknown tab</p>;
      }
    }

  
    // Add similar blocks for Inventory, Staff & HR, Reports, Settings...
  
    return <p>🔍 No content available for {section} - {tab}</p>;
  };
  
  export default AdminContent;
  