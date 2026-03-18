const highlightMatch = (text, query) => {
  if (!query || query.length < 3) return text;

  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedQuery})`, "gi");

  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="bg-yellow-200 font-semibold">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  );
};

const SearchResults = ({ results, query, loading, onSelectStudent }) => {
  if (loading) {
    return (
      <div className="absolute z-20 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg p-4 text-sm text-gray-500">
        Searching...
      </div>
    );
  }
  
  if (query?.length >= 3 && results?.length === 0 ) {
    return (
      <div className="absolute z-20 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg p-4 text-sm text-gray-500">
        No students found.
      </div>
    );
  }

  if (results?.length === 0) return null;

  return (
    <div className="absolute z-20 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
      {results.map((student) => (
        <button
          key={student.rollNumber}
          onClick={() => onSelectStudent(student)}
          className="w-full text-left px-4 py-3 hover:bg-blue-50 transition border-b border-gray-100 last:border-b-0"
        >
          <div className="font-medium text-gray-800">
            {highlightMatch(student.name, query)}
          </div>
          <div className="text-sm text-gray-500">
            Class: {student.class} | Roll No: {student.rollNumber}
          </div>
        </button>
      ))}
    </div>
  );
};

export default SearchResults;