import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AdminContent from "./content/AdminContent"; // adjust path if needed


const Sidebar = ({
  role,
  selectedSection,
  setSelectedSection,
  setActiveTab,
  section,
  tab
}) => {
  if (role === "dev") role = "admin";

  const linksByRole = {
    admin: [
      "User Management",
      "Appointment Management",
      "Inventory",
      "Staff & HR",
      "Reports",
      "Settings"
    ],
    doctor: ["Patients", "Appointments"],
    nurse: ["Vitals", "Reports"]
  };

  const links = linksByRole[role] || [];

  return (
    <div className="d-flex gap-3">
      {/* Sidebar Column */}
      <div id="sidebar" className="bg-light text-black p-3" style={{ width: "225px", height: "85vh" }}>
        <p className="mb-3">
          {role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Panel` : "No Role Detected"}
        </p>
        <hr></hr>
        <div style={{ height: "10px" }}></div>
        <ul className="nav flex-column">
          {links.map((section) => (
            <li className="nav-item mb-1" key={section}>
              <button 
                id="sidebar-btn"
                className={`btn btn-sm ${selectedSection === section ? "btn-secondary" : "btn-outline-light"} w-100 text-start`}
                onClick={() => {
                  setSelectedSection(section);
                  setActiveTab(null);
                }}
              >
                {section}
              </button>
              <div style={{ height: "10px"}}></div>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Column */}
      <div id="contentbar" className="flex-grow-1 p-4 bg-light overflow-auto">
        
        <div style={{ minHeight: "75vh" }}>
          <AdminContent section={section} tab={tab} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
