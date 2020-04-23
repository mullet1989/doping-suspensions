import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import moment from "moment";
import Toggle from "./active-toggle";
import { violations } from "../App";

const Search = ({ setViolations }) => {

  let [query, setQuery] = useState("");
  let [active, setActive] = useState(false);

  let options = {
    shouldSort: true,
    threshold: 0.1,
    location: 0,
    distance: 100,
    minMatchCharLength: 1,
    keys: [
      "Name"
    ]
  };

  useEffect(() => {
    performSearch(violations, query)
      .then(violations => onActiveToggle(violations, active))
      .then(violations => setViolations(violations));
  }, [query, active]);

  const performSearch = (violations, query) => {
    return new Promise(resolve => {
      if (query === "") {
        return resolve(violations);
      }

      let fuse = new Fuse(violations, options); // "list" is the item array
      let result = fuse.search(query);
      resolve(result.map(x => x.item));
    });
  };

  const onActiveToggle = (violations, active) => {
    return new Promise(resolve => {
      if (active) {
        const today = moment();
        const activeSuspensions = violations.filter(x => {
          const until = moment(x["Ineligibility until"], "DD/MM/YYYY");
          return until.isAfter(today);
        });
        return resolve(activeSuspensions);
      }
      resolve(violations);
    });
  };

  return (
    <form>
      <fieldset>
        <h1>
          Search for violations
        </h1>
        <div style={{
          padding: "10px",
          marginBottom: "2rem",
          borderLeft: ".3rem solid #49d79f",
          backgroundColor: "#f4f5f6"
        }}>
          <span>Type the first name of the athlete you want to check</span>
        </div>
        <input style={{ fontSize: "1.5rem" }} type="text" id="search"
               onKeyPress={(e) => {
                 e.key === "Enter" && e.preventDefault();
               }}
               onChange={event => setQuery(event.target.value)}/>
        <Toggle onCheck={e => setActive(!active)}/>
      </fieldset>
    </form>
  );
};

export default Search;