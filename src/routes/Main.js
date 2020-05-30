import Search from "../components/search";
import Grid from "../components/grid";
import React, { useEffect, useState } from "react";
import csvtojson from "csvtojson";

export let violations = [];

const Main = () => {

  const csv = csvtojson();

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
        if (!violations.length) {
          violations.push(...json);
        }
        setResult(json);
        setIsLoading(false);
      } catch (e) {
        violations.splice(0, violations.length);
        setResult([]);
      }
    };

    get();

    return () => {
      setIsLoading(false);
      setResult([]);
    };

  }, []);

  return (
    <>
      <div className="row">
        <div className="column">

          <Search setViolations={setResult} />

        </div>
      </div>

      <div className="row">
        <div style={{ overflowX: "auto" }}>
          <div className="column">
            <Grid violations={result} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;