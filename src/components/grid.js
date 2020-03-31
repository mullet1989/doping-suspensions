import React from "react";


import Violation from "./violation";


const Grid = ({ violations, loading }) => {

  if (loading) {
    return <span>Loading ...</span>
  }

  return violations.length > 0
    ? (<table style={{ tableLayout: "fixed" }}>
      <thead>
      <tr>
        <th>Name</th>
        <th>Date of Birth</th>
        <th>Nationality</th>
        <th>Sanction</th>
        <th>Ineligibility until</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      {violations.map((a, i) =>
        <tr key={i}>
          <Violation athlete={a}/>
        </tr>
      )}
      </tbody>
    </table>)
    : <span> No results </span>;
};

export default Grid;

