
function Sidebar() {
  return (
    <div className="lg:w-[64] w-[4rem]  bg-white shadow-lg flex flex-col">
      <div className="md:p-6 p-2 md:text-2xl font-bold">Quyl.</div>
      <nav className="flex flex-col gap-4 mt-4 text-gray-700">
        <a href="#" className="flex items-center p-4 gap-2 hover:bg-gray-100">

          <img src="dashboard.svg" alt="" /><span className="hidden lg:block">Dashboard</span>
        </a>
        <a href="#" className="flex items-center p-4 gap-2 bg-gray-200">
          <img src="students.svg" alt="" /><span className="hidden lg:block">Students</span>
        </a>
        <a href="#" className="flex items-center p-4 gap-2 hover:bg-gray-100">
          <img src="chapter.svg" alt="" /><span className="hidden lg:block">Chapter</span>
        </a>
        <a href="#" className="flex items-center p-4 gap-2 hover:bg-gray-100">
          <img src="help.svg" alt="" /><span className="hidden lg:block">Help</span>
        </a>
        <a href="#" className="flex items-center p-4 gap-2 hover:bg-gray-100">
          <img src="report.svg" alt="" /><span className="hidden lg:block">Reports</span>
        </a>
        <a href="#" className="flex items-center p-4 gap-2 hover:bg-gray-100">
          <img src="settings.svg" alt="" /><span className="hidden lg:block">Settings</span>
        </a>
        <button className=" mt-auto md:mx-4 md:py-2 md:px-4 text-sm m-2 pt-2 h-[2rem] w-[2rem] bg-blue-500 text-white rounded hover:bg-blue-600">
          Hug × Hug
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
