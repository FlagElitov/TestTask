import React from "react";

const RouteList = ({ name, arrivalHour, sendingTime }) => {
  return (
    <>
      <div>{name}</div>
      <div>{arrivalHour}</div>
      <div>{sendingTime}</div>
    </>
  );
};

export default RouteList;
