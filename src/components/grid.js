import React from "react";


import Violation from "./violation";


const Grid = ({ violations, loading }) => {

  if (loading) {
    return <span>Loading ...</span>;
  }

  return violations.length > 0
    ? (<table style={{ tableLayout: "fixed" }}>
      <thead>
      <tr>
        <th style={{ overflowWrap: "break-word" }}>Name</th>
        <th className="rm-small" style={{ overflowWrap: "break-word" }}>Date of Birth</th>
        <th style={{ overflowWrap: "break-word" }}>Nationality</th>
        <th style={{ overflowWrap: "break-word" }}>Sanction</th>
        <th style={{ overflowWrap: "break-word" }}>Ineligibility until</th>
        <th className="rm-small" style={{ overflowWrap: "break-word" }}>Description</th>
      </tr>
      </thead>
      <tbody>
      {violations.slice(0, 100).map((a, i) =>
        <tr key={i}>
          <Violation athlete={a}/>
        </tr>
      )}
      </tbody>
    </table>)
    : <span> No results </span>;
};

export default Grid;

