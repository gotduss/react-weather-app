/* Imports */
import { useState } from "react";
import "./styles.css";

/* InputSearch component */
const SearchForm = ({ onSubmit }) => {
  /* States */
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <form className="input-search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter location (e.g.: Brisbane,AU)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
