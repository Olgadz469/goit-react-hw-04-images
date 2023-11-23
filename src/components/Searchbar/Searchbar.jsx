import { useState } from 'react';
import css from './Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';

export function SearchBar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');

  const handleChange = event => {
    setSearchName(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const searchQuery = searchName;
    onSubmit(searchQuery);
    setSearchName('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <button type="submit" className={css.button}>
          <FaSearch />
          <span>Search</span>
        </button>

        <input
          className={css.input}
          name="searchName"
          type="text"
          id="search"
          value={searchName}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
