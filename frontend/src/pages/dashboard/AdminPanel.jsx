function AdminPanel() {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-2xl font-bold">Admin Dashboard</div>
  
        {/* Stats Section (placeholder) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded shadow p-4 text-center">
            <p className="text-gray-500">Total Users</p>
            <p className="text-xl font-semibold">12</p>
          </div>
          <div className="bg-white rounded shadow p-4 text-center">
            <p className="text-gray-500">Doctors</p>
            <p className="text-xl font-semibold">4</p>
          </div>
          <div className="bg-white rounded shadow p-4 text-center">
            <p className="text-gray-500">Patients</p>
            <p className="text-xl font-semibold">152</p>
          </div>
          <div className="bg-white rounded shadow p-4 text-center">
            <p className="text-gray-500">Active Clinics</p>
            <p className="text-xl font-semibold">1</p>
          </div>
        </div>
  
        {/* User Management Section (starter layout) */}
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Manage Users</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Username</th>
                <th className="p-2">Email</th>
                <th className="p-2">Role</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* You’ll later map real users here */}
              <tr>
                <td className="p-2">jdoe</td>
                <td className="p-2">jdoe@example.com</td>
                <td className="p-2">doctor</td>
                <td className="p-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                </td>
              </tr>
              <tr>
                <td className="p-2">admin</td>
                <td className="p-2">admin@clinic.com</td>
                <td className="p-2">admin</td>
                <td className="p-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default AdminPanel;
  