import React from "react";

import { Driver } from "./Driver.tsx";

const styles = {
  display: "flex",
  flexDirection: "column",
  marginLeft: 50
};

export const DriversList = ({ drivers }) => {
  return (
    <div style={styles} className="driverlist">
      {drivers.map((item, index) => {
        return <Driver key={index} {...item} />;
      })}
    </div>
  );
};
