import React from "react";
import { useHistory } from "react-router-dom";

export function SearchBar() {
  const history = useHistory();
  const handleSumbit = (e) => {
    e.preventDefault();

    let searchTerm = document.getElementById('nav-search-bar')
    history.push(`/search/${searchTerm.value}`, {wines: []})
    searchTerm.value = ""
  }


  return (
    <div className="nav-search-bar">
      <form onSubmit={e => handleSumbit(e)}>
        <input id="nav-search-bar" type="text" placeholder="Search for a Wine"/>
      </form>
    </div>
  )

}
