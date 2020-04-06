import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
  const [term, setTerm] = useState('');

  const search = () => {
    props.onSearch(term);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <div className="SearchBar">
        <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton" onClick={search}>
          SEARCH
        </button>
      </div>
    </div>
  );
}
