function Sidebar() {
    return (
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 text-2xl font-bold">Quyl.</div>
        <nav className="flex flex-col gap-4 mt-4 text-gray-700">
          <a href="#" className="flex items-center p-4 hover:bg-gray-100">
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center p-4 bg-gray-200">
            <span>Students</span>
          </a>
          <a href="#" className="flex items-center p-4 hover:bg-gray-100">
            <span>Chapter</span>
          </a>
          <a href="#" className="flex items-center p-4 hover:bg-gray-100">
            <span>Help</span>
          </a>
          <a href="#" className="flex items-center p-4 hover:bg-gray-100">
            <span>Reports</span>
          </a>
          <a href="#" className="flex items-center p-4 hover:bg-gray-100">
            <span>Settings</span>
          </a>
          <button className="mt-auto mx-4 py-2 px-4 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
            Hug × Hug
          </button>
        </nav>
      </div>
    );
  }
  
  export default Sidebar;
  