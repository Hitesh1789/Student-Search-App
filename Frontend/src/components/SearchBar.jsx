const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Search Student
      </label>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type at least 3 characters..."
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
      />
    </div>
  );
};

export default SearchBar;