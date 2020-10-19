import React from "react";
import Fish from "./Fish";

const Tank = (props) => {
  const { name } = props;
  return (
    <div className="tank">
      {name}

      <Fish color={"red"} size="small"></Fish>
      <Fish color={"green"} size="medium"></Fish>
      <Fish color={"yellow"} size="large"></Fish>
    </div>
  );
};

export default Tank;
