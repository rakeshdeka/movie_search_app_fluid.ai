import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";  

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");


  const debouncedSearchTerm = useDebounce(searchTerm, 500); 
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);  
  };


  React.useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm); 
    }
  }, [debouncedSearchTerm, onSearch]);

  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearchChange}  
        className="p-2 rounded-lg border w-[50%] text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
