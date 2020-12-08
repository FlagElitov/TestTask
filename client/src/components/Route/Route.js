import React from "react";

const RouteList = ({ name, arrivalHour, sendingTime }) => {
  return (
    <>
      <div>{sendingTime}</div>
      <div>{name}</div>
      <div>{arrivalHour}</div>
    </>
  );
};

export default RouteList;
