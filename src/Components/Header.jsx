function Header() {
  return (
    <>
      <header className="flex flex-wrap justify-between items-center bg-white p-4 shadow-md">
        <input
          type="text"
          placeholder="Search your course"
          className="border rounded-lg px-4 py-2 w-full md:w-1/3 mb-4 md:mb-0"
        />
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <div className="text-gray-500">
            <img src="help.svg" alt="Help" className="w-6 h-6" />
          </div>
          <div className="text-gray-500">
            <img src="notify.svg" alt="Notify" className="w-6 h-6" />
          </div>
          <div className="text-gray-500">
            <img src="sw.svg" alt="Switch" className="w-6 h-6" />
          </div>
          <div className="text-gray-500">
            <img src="bell.svg" alt="Notifications" className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://img.freepik.com/free-photo/portrait-business-woman-with-enthusiastic-face-expression-smiling-looking-confident-standing-s_1258-88087.jpg"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="hidden md:inline font-medium">Adeline H. Dancy</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
