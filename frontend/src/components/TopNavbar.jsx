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
    <nav id="topbar-nav"className="navbar bg-body-tertiary  rounded-4 px-3 py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">

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

        {/* Center Tabs */}
        <div id="topbar-cont" className="d-flex gap-2 me-auto">
          {tabs.map((tab) => (
            <div key={tab} className="d-inline-flex p-2">
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

        {/* Right Side Bell Icon */}
        <div className="d-flex align-items-center">
          <svg
            id="bell-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-bell-fill text-dark"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
          </svg>
        </div>

      </div>
    </nav>

  );
};

export default TopNavbar;
