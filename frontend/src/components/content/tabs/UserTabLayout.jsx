
const  UsersTabLayout = ({ section, tab, user}) => {
    return <div class="container">
                <div class="row">
                    <nav class="navbar">
                        <div class="container-fluid">
                            <a class="navbar-brand">Navbar</a>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button id="add-person-btn"class="btn btn-secondary" type="submit">
                                    <svg id="add-person-icon"xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                    <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </nav>
                </div>
                <div class="row">
                    <div style={{ height: "30px" }}></div>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-1">
                            <div class="card">
                                <div class="card-header gx-0">
                                    <p class="m-0">{user.name}</p>
                                </div>
                                <div class="card-body text-start">
                                    <div id="card-cont"class="container">
                                        <div class="row g-2 gy-1">
                                            <div class="col-2">
                                                <p class="mb-1">{user.id}</p>
                                            </div>
                                            <div class="col-2">
                                                <p class="mb-1">{user.gender}</p>
                                            </div>
                                            <div class="col-2">
                                                <p class="mb-1">{user.phone}</p>
                                            </div>
                                        </div>
                                        <div class="row g-2 gy-1">
                                            <div class="col-2">
                                                <p class="mb-1">{user.DOB}</p>
                                            </div>
                                            <div class="col-2"></div>
                                            <div class="col-2">
                                                <p class="mb-1">{user.email}</p>
                                            </div>
                                            <div class="col-2">
                                                <p class="mb-1">{user.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
    if (section === "User Management") {
      switch (tab) {
        case "Patients":
          return <p>📁 Patients Component</p>;
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
  
  export default UsersTabLayout;
  