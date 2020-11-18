import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Box({ number, label, icon }) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#fff",
        padding: "15px 20px",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: "5px",
        flex: 0.22,
        boxShadow: "1px 1px 1px 1px rgba(41,72,76,0.77)",
        // marginRight: '30px',
        // marginleft: '30px',
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(205, 234, 243)",
          padding: "5px",
          display: "flex",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "20px",
        }}
      >
          {icon}
        {/* <AccountCircleIcon style={{ fontSize: 40 }} /> */}
      </div>
      <div>
        <h4 style={{ fontSize: "30px" }}>{number}</h4>
        <p style={{ fontSize: "15px" }}>{label}</p>
      </div>
    </div>
  );
}

export default Box;
