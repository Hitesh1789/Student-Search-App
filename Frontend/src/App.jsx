import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import SearchResults from "./components/SearchResults.jsx";
import StudentCard from "./components/StudentCard.jsx";
import { searchStudentsApi } from "./apis/student.api.js";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const trimmedQuery = query.trim();

    // Reset if less than 3 chars
    if (trimmedQuery?.length < 3) {
      setResults([]);
      setLoading(false);
      setError("");
      return;
    }

    // Debounce API call
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");
        const data = await searchStudentsApi(trimmedQuery);
        setResults(data);
      } catch (err) {
        console.log(err)
        setError("Something went wrong while fetching students.");
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 400); // 400ms 

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
    setQuery(student.name);
    setResults([]);
    setQuery("")
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Student Search App</h1>
          <p className="mt-2 text-gray-600">
            Search students by name with lazy loading & debounce
          </p>
        </div>

        {/* Search Section */}
        <div className="relative rounded-2xl bg-white p-6 shadow-lg border border-gray-200">
          <SearchBar query={query} setQuery={setQuery} />

          <SearchResults
            results={results}
            query={query.trim()}
            loading={loading}
            onSelectStudent={handleSelectStudent}
          />

          {query.trim().length > 0 && query.trim().length < 3 && (
            <p className="mt-3 text-sm text-gray-500">
              Please type at least 3 characters to search.
            </p>
          )}

          {error && (
            <p className="mt-3 text-sm text-red-500 font-medium">{error}</p>
          )}
        </div>

        {/* Selected Student Details */}
        <StudentCard student={selectedStudent} />
      </div>
    </div>
  );
};

export default App;