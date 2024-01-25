import React from "react";
import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Search({ search, onSearch }) {
  return (
    <div className="search">
      <SearchRoundedIcon />
      <input
        placeholder="Search your coin"
        type="text"
        value={search}
        onChange={(e) => onSearch(e)}
      />
    </div>
  );
}

export default Search;
