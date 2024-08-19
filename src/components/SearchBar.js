import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    if (location) {
      onSearch(location);
      setLocation(''); // Clear the input field
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={location}
        onChange={handleInputChange}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
