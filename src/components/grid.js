import React from "react";


import Violation from "./violation";


const Grid = ({ violations }) => {

  return violations.length > 0
    ? (<table style={{ tableLayout: "fixed" }}>
      <thead>
      <tr>
        <th>Name</th>
        <th>Country</th>
        <th>Event</th>
        <th>Date of violation</th>
        <th>Banned substance(s)/</th>
        <th>Sanctions</th>
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
    : <span> Loading ... </span>;
};

export default Grid;

