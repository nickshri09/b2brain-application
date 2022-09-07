import React, { useState } from 'react'
import * as ai from 'react-icons/ai';
import { SSearch, SSearchIcon } from './styles';
import HomeStatic from './HomeStatic';
import SearchPage from './SearchPage';


const HomePage = () => {
  const [search, setSearch] = useState();

  const searchQuery = (e) => {
    var inputValue = e.target.value.toLowerCase();
    setSearch(inputValue);
  };

  const resetSearchField = () => {
    setSearch("");
    document.getElementById("searchId").value = "";
  }

  return (
    <>
      {/* Search Bar */}
      <SSearch>
        <SSearchIcon>
          {typeof search === "undefined" || search === "" ? (
            <ai.AiOutlineSearch />
          ) : (
            <ai.AiOutlineClose onClick={resetSearchField} className="cursor-pointer" />
          )}
        </SSearchIcon>
        <input placeholder='Search by account name or website' type="text"
          name="search"
          id="searchId"
          value={search}
          onChange={searchQuery} />
      </SSearch>
      {typeof search === "undefined" || search === "" ? (
        // Static Home Page
        <HomeStatic />
      ) : (
        // After performing Search operation
        <SearchPage searchTerm={search} />
      )}
    </>
  )
}

export default HomePage;