import React from "react";

const Violation = ({ athlete }) => {
  return (
    <>
      <td>{athlete["Name"]}</td>
      <td>{athlete["Date of Birth"]}</td>
      <td>{athlete["Nationality"]}</td>
      <td>{athlete["Sanction"]}</td>
      <td>{athlete["Ineligibility until"]}</td>
      <td>{athlete["Description"]}</td>
    </>
  );
};

export default Violation;