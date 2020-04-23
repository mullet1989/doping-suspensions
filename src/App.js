import React, { useEffect, useState } from "react";
import Grid from "./components/grid";
import Search from "./components/search";
import csvtojson from "csvtojson";

const csv = csvtojson();

export const violations = [];

function App() {

  let [result, setResult] = useState([]);
  let [_, setIsLoading] = useState(false);


  useEffect(() => {

    const get = async () => {
      //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
      const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

      try {
        setIsLoading(true);
        const url = `/banned-athletes.csv?${randomString}`;
        const resp = await fetch(url);
        const bannedAthletes = await resp.text();
        const json = await csv.fromString(bannedAthletes);
        violations.push(...json);
        setResult(json);
        setIsLoading(false);
      } catch (e) {
        violations.splice(0, violations.length);
        setResult([]);
      }
    };

    get();

  }, []);


  return (
    <div className="App">
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="column">
            <img src="/logo-large.png" />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Search setViolations={setResult}/>
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