function Header() {
    return (
      <header className="flex justify-between items-center bg-white p-4 shadow-md">
        <input
          type="text"
          placeholder="Search your course"
          className="border rounded-lg px-4 py-2 w-1/3"
        />
        <div className="flex items-center gap-4">
          <div className="text-gray-500">?</div>
          <div className="text-gray-500">🔔</div>
          <div className="flex items-center gap-2">
            <img
              src="https://via.placeholder.com/32"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium">Adeline H. Dancy</span>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  