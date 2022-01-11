import React from "react";
import { useHistory } from "react-router-dom";

export function MainSearchBar() {
  const history = useHistory();
  const handleSumbit = (e) => {
    e.preventDefault();

    let searchTerm = document.getElementById('main-search-bar')
    history.push(`/search/${searchTerm.value}`, {wines: []})
    searchTerm.value = ""
  }


  return (
    <div className="search-bar">
      <form onSubmit={e => handleSumbit(e)}>
        <input id="main-search-bar" type="text" placeholder="Search for a Wine"/>
      </form>
    </div>
  )

}
