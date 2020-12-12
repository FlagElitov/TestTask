import React from "react";

const RouteList = ({ name, arrivalHour, sendingTime }) => {
  return (
    <>
      <div>{sendingTime} год</div>
      <div>{name}</div>
      <div>{arrivalHour} год</div>
    </>
  );
};

export default RouteList;
