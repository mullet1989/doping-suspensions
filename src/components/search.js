import React from "react";
import Fuse from "fuse.js";

const Search = ({ violations, setViolations }) => {

  let options = {
    shouldSort: true,
    threshold: 0.1,
    location: 0,
    distance: 100,
    minMatchCharLength: 1,
    keys: [
      "Name"
      // "Country",
      // "Event",
      // "Date of violation",
      // "Banned substance(s)/",
      // "Sanctions"
    ]
  };

  const parseQuery = query => {

    let fuse = new Fuse(violations, options); // "list" is the item array
    let result = fuse.search(query);
    setViolations(result.map(x => x.item));
  };


  return (
    <>
      <h1>
        Search for violations
      </h1>
      <input type="text" onKeyUp={event => parseQuery(event.target.value)}/>
    </>
  );
};

export default Search;