import React from "react";

const Violation = ({ athlete }) => {
  return (
    <>
      <td>{athlete["Name"]}</td>
      <td>{athlete["Country"]}</td>
      <td>{athlete["Event"]}</td>
      <td>{athlete["Date of violation"]}</td>
      <td>{athlete["Banned substance(s)/"]}</td>
      <td>{athlete["Sanction"]}</td>
    </>
  );
};

export default Violation;