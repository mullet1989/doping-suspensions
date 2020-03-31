import React from "react";

const Toggle = ({ onCheck }) => {
  return (
    <label htmlFor="active" style={{ cursor: "pointer" }}>
      <input id="active" type="checkbox" value="Active Suspensions" onChange={e => onCheck(e.target.checked)}/>
      &nbsp;Active suspensions only
    </label>
  );
};

export default Toggle;