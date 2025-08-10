import React from 'react';

function SearchBar({ placeholder, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onSearchChange}
      className="w-full p-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent"
    />
  );
}

export default SearchBar;