import React from "react";
import { useState } from "react";
import smartVehicleStyle from "./SmartVehicleStyle.module.css";
import { ReactComponent as SmartVehicleSVG } from "../../assets/Body/smartVehicle.svg";
import { ReactComponent as ArrowUp } from "../../assets/Body/arrowUp.svg";
import { ReactComponent as Camera } from "../../assets/Body/camera.svg";
import { ReactComponent as Network } from "../../assets/Body/network.svg";
import { ReactComponent as Memory } from "../../assets/Body/memory.svg";
import { ReactComponent as Temp } from "../../assets/Body/temp.svg";

export default function SmartVehicle({ dotColor }) {
  const [showVehicleDetails, setShowVehicleDetails] = useState(false);
  const details = [
    {
      icon: <Camera width="30" height="30" />,
      name: "Camera",
      status1: "Online",
      status2: "Active",
      red: false,
    },
    {
      icon: <Network width="30" height="30" />,
      name: "Network",
      status1: "Available",
      status2: "Active",
      red: false,
    },
    {
      icon: <Memory width="30" height="30" />,
      name: "Memory",
      status1: "20%",
      status2: "Normal",
      red: false,
    },
    {
      icon: <Temp width="30" height="30" />,
      name: "CPU Temp",
      status1: "70°",
      status2: "High",
      red: true,
    },
  ];

  return (
    <div
      onClick={() => {
        setShowVehicleDetails(!showVehicleDetails);
      }}
      className={`${smartVehicleStyle.smartVehicleFullView} ${
        showVehicleDetails ? smartVehicleStyle.smartVehicleFullViewActive : ""
      }`}
    >
      <div className={smartVehicleStyle.smartVehicleFullViewHeader}>
        <div className={smartVehicleStyle.smartVehicleDiv}>
          <SmartVehicleSVG width="80" height="80" />
        </div>

        <div className={smartVehicleStyle.smartVehicleTextwithDot}>
          <span
            style={{
              width: "10px",
              height: "10px",
              background: `${dotColor}`,
              borderRadius: "50%",
            }}
          ></span>
          <h5>Smart Vehicle 1</h5>
        </div>

        <div
          className={`${smartVehicleStyle.arrowContainer} ${
            showVehicleDetails ? smartVehicleStyle.rotateArrow : ""
          }`}
        >
          <ArrowUp width="22" height="22" />
        </div>
      </div>
      <div
        className={`${smartVehicleStyle.fullDetails} ${
          showVehicleDetails ? smartVehicleStyle.fullDetailsActive : ""
        }`}
      >
        <div className={smartVehicleStyle.smartVehicleDetailsContainer}>
          {details.map((ele, index) => {
            return (
              <div
                key={index}
                className={smartVehicleStyle.smartVehicleSingleDetail}
              >
                {ele.icon}
                <p style={{ fontSize: "12px", color: "#6D7485" }}>{ele.name}</p>
                <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                  {ele.status1}
                </p>
                <div
                  className={`${smartVehicleStyle.activeStatus} ${
                    ele.red ? smartVehicleStyle.activeStatusRed : ""
                  }`}
                >
                  <span>{ele.status2}</span> <span></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
