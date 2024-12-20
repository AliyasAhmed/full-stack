function MainContent() {
  const data = [
    { name: 'Anshuman Kashyap', cohort: 'AY 2024-25', courses: 'CBSE 9 Science, CBSE 9 Math', dateJoined: '17 Nov. 2024', lastLogin: '17 Nov. 2024 4:16 PM', status: 'green' },
    { name: 'Bansi Dadhaniya', cohort: 'AY 2024-25', courses: 'CBSE 9 Science, CBSE 9 Math', dateJoined: '17 Nov. 2024', lastLogin: '17 Nov. 2024 4:16 PM', status: 'green' },
    { name: 'Chandrika Valotia', cohort: 'AY 2024-25', courses: 'CBSE 9 Science, CBSE 9 Math', dateJoined: '17 Nov. 2024', lastLogin: '17 Nov. 2024 4:16 PM', status: 'red' },
    { name: 'Devang Dave', cohort: 'AY 2024-25', courses: 'CBSE 9 Science, CBSE 9 Math', dateJoined: '17 Nov. 2024', lastLogin: '17 Nov. 2024 4:16 PM', status: 'red' },
    { name: 'Forum Bhatt', cohort: 'AY 2024-25', courses: 'CBSE 9 Science, CBSE 9 Math', dateJoined: '17 Nov. 2024', lastLogin: '17 Nov. 2024 4:16 PM', status: 'green' },
    { name: 'Hritika Dattani', cohort: 'AY 2024-25', courses: 'CBSE 9 Science, CBSE 9 Math', dateJoined: '17 Nov. 2024', lastLogin: '17 Nov. 2024 4:16 PM', status: 'green' },
    { name: 'Khushi Joshi', cohort: 'AY 2024-25', courses: 'CBSE 9 Science, CBSE 9 Math', dateJoined: '17 Nov. 2024', lastLogin: '17 Nov. 2024 4:16 PM', status: 'red' },
    { name: 'Mansi Patel', cohort: 'AY 2024-25', courses: 'CBSE 9 Science, CBSE 9 Math', dateJoined: '17 Nov. 2024', lastLogin: '17 Nov. 2024 4:16 PM', status: 'red' },
    { name: 'Nita Shah', cohort: 'AY 2024-25', courses: 'CBSE 9 Science, CBSE 9 Math', dateJoined: '17 Nov. 2024', lastLogin: '17 Nov. 2024 4:16 PM', status: 'green' },
    { name: 'Priyanshu Shirvastava', cohort: 'AY 2024-25', courses: 'CBSE 9 Science, CBSE 9 Math', dateJoined: '17 Nov. 2024', lastLogin: '17 Nov. 2024 4:16 PM', status: 'red' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <div className="flex gap-4">
          <select className="border rounded-lg px-4 py-2">
            <option>AY 2024-25</option>
          </select>
          <select className="border rounded-lg px-4 py-2">
            <option>CBSE 9</option>
          </select>
        </div>
        <button className="bg-[#dfdfdf] text-black px-4 py-2 rounded hover:bg-[#bbbbbb] transition-all">
          + Add new Student
        </button>
      </div>

      <table className="w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Student Name</th>
            <th className="px-4 py-2 text-left">Cohort</th>
            <th className="px-4 py-2 text-left">Courses</th>
            <th className="px-4 py-2 text-left">Date Joined</th>
            <th className="px-4 py-2 text-left">Last Login</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.cohort}</td>
              <td className="px-4 py-2">{student.courses}</td>
              <td className="px-4 py-2">{student.dateJoined}</td>
              <td className="px-4 py-2">{student.lastLogin}</td>
              <td className="px-4 py-2">
                <span
                  className={`inline-block w-3 h-3 rounded-full ${
                    student.status === 'green' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                ></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainContent;
