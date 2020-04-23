import React from "react";

const Violation = ({ athlete }) => {
  return (
    <>
      <td style={{ overflowWrap: "break-word" }}>{athlete["Name"]}</td>
      <td className="rm-small" style={{ overflowWrap: "break-word" }}>{athlete["Date of Birth"]}</td>
      <td style={{ overflowWrap: "break-word" }}>{athlete["Nationality"]}</td>
      <td style={{ overflowWrap: "break-word" }}>{athlete["Sanction"]}</td>
      <td style={{ overflowWrap: "break-word" }}>{athlete["Ineligibility until"]}</td>
      <td className="rm-small" style={{ overflowWrap: "break-word" }}>{athlete["Description"]}</td>
    </>
  );
};

export default Violation;