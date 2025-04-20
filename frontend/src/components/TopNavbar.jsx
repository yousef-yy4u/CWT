import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const TopNavbar = ({ section, activeTab, setActiveTab }) => {
  const { user, logout } = useContext(AuthContext);
  const tabLinks = {
    "User Management": ["Patients", "Doctors", "Staff", "RBAC"],
    "Appointment Management": ["Calendar", "Walk-ins", "Reminders"],
    Inventory: ["Stock Levels", "Suppliers", "Orders"],
    "Staff & HR": ["Shifts", "Attendance", "Payroll", "Leave"],
    Reports: ["Revenue", "Visits", "Inventory", "Doctor Perf."],
    Settings: ["Branding", "Roles", "Fields", "Language"]
  };

  const tabs = tabLinks[section] || [];

  return (
    <nav className="navbar bg-body-tertiary shadow-lg rounded-4 px-3 py-2">
      <div className="container-fluid d-flex justify-content-between">
        {/* Left Logo/Brand */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            width="30"
            height="24"
            className="d-inline-block"
            alt="Bootstrap Logo"
          />
          <span className="fw-semibold">Bootstrap</span>
        </a>

        {/* Centered Tabs */}
        <div id="topbar-cont"className="d-flex gap-2 me-auto">
          {tabs.map((tab) => (
            <div class="d-inline-flex p-2">
              <button
                id="topbar-btn"
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`btn btn-sm ${
                  activeTab === tab ? "btn-secondary" : "btn-outline-light"
                }`}
              >
                {tab}
              </button>
              <div style={{ width: "20px" }}></div>
            </div>
          ))}
        </div>
      </div>
    </nav>

  );
};

export default TopNavbar;
