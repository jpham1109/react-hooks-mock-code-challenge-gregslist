import React from "react";

function Search({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function handleChange(e){
    onSearch(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit} onChange={handleChange}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={""}
        onChange={(e) => console.log(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
