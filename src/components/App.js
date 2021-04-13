import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
//listing array state
//search term state
function App() {
  const [listings, setListings] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(setListings)
  }, [])

  function onSearch(value){
    setSearchText(value)
  }

  return (
    <div className="app">
      <Header
      onSearch={onSearch}
      />
      <ListingsContainer
      setListings={setListings}
      searchText={searchText} 
      listings={listings} />
    </div>
  );
}

export default App;
