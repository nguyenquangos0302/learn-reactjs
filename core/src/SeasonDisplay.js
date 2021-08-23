import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const { lat } = props;
  const season = getSeason(lat, new Date().getMonth());
  console.log(season);
  return <div>Season</div>;
};

export default SeasonDisplay;
