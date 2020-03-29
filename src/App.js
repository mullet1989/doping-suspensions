import React, { useEffect, useState } from "react";
import Grid from "./components/grid";
import Search from "./components/search";

import csvtojson from "csvtojson";

const csv = csvtojson();

function App() {

  let [violations, setViolations] = useState([]);
  let [result, setResult] = useState([]);

  useEffect(() => {

    const get = async () => {
      try {
        const resp = await fetch("/banned-athletes.csv");
        const bannedAthletes = await resp.text();
        const json = await csv.fromString(bannedAthletes);
        setViolations(json);
        setResult(json);
      } catch (e) {
        setViolations([]);
        setResult([]);
      }
    };

    get();

  }, []);


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="column">
            <Search violations={violations} setViolations={setResult}/>
          </div>
        </div>
        <div className="row">
          <div style={{ overflowX: "auto" }}>
            <div className="column">
              <Grid violations={result}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;