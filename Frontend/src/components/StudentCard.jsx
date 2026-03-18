const StudentCard = ({ student }) => {
  if (!student) return null;

  return (
    <div className="mt-8 rounded-2xl bg-white shadow-md border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Details</h2>

      <div className="space-y-3 text-gray-700">
        <p>
          <span className="font-semibold">Name:</span> {student.name}
        </p>
        <p>
          <span className="font-semibold">Class:</span> {student.class}
        </p>
        <p>
          <span className="font-semibold">Roll Number:</span> {student.rollNumber}
        </p>
      </div>
    </div>
  );
};

export default StudentCard;