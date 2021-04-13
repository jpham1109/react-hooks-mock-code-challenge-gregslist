import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, searchText, setListings }) {
  const [sorted, setSorted] = useState(false)
  
  function handleSort() {
    setSorted(sorted => !sorted)
  }
  
  const filterListings = listings.filter(listing => listing.description.toLowerCase().includes(searchText.toLowerCase()))
  
  const displayListings = filterListings.map(listing => 
    <ListingCard key={listing.id} listing={listing} onDelete={onDelete} />
    )
  
  const sortedListings = [...displayListings].sort((a, b) => b.location.localeCompare(a.location))
  .map(listing => 
    <ListingCard key={listing.id} listing={listing} onDelete={onDelete} />
    )
//delete
function onDelete(id){
  const updatedListings = listings.filter(listing => listing.id !== id)
  setListings(updatedListings)
}

  return (
    <main>
      <label>Sort by location</label>
        <input type="checkbox" checked={sorted} onChange={handleSort}/>
      
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
