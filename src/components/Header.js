import React from "react";
import Search from "./Search";
import ListingForm from "./ListingForm"

function Header({searchText, onSearch, onAddListing}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchText={searchText} onSearch={onSearch}/>
      <ListingForm onAddListing={onAddListing}/>
    </header>
  );
}

export default Header;
