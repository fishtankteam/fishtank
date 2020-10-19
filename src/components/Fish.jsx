import React from "react";

const Fish = (props) => {
  const { color, size } = props;

  return <div className={`fish ${size} ${color}`}>Fish</div>;
};

export default Fish;
