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

  function handleSearch(value){
    setSearchText(value)
  }

  function handleAddListing(newListing) {
    setListings([...listings], newListing)
  }

  return (
    <div className="app">
      <Header
      searchText={searchText}
      onSearch={handleSearch}
      onAddListing={handleAddListing}
      />

      <ListingsContainer
      setListings={setListings}
      searchText={searchText} 
      listings={listings} />
    </div>
  );
}

export default App;
