import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, searchText, setListings }) {
  const [sorted, setSorted] = useState(false)
  
  function handleSort() {
    setSorted(sorted => !sorted)
  }
  
  const filterListings = listings.filter(listing => listing.description.toLowerCase().includes(searchText.toLowerCase()))
    .sort((a, b) => {
      if (sorted === false) {
        return a.id - b.id
      } else {
        return a.location.localeCompare(b.location)
      }
    })
  
  const displayListings = filterListings.map(listing => 
    <ListingCard key={listing.id} listing={listing} onDelete={onDelete} />
    )
  

  function onDelete(id){
    const updatedListings = listings.filter(listing => listing.id !== id)
    setListings(updatedListings)
  }

  return (
    <main>
      <button onClick={handleSort}>Sort by {sorted ? "Location" : "Oldest"}</button>
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
