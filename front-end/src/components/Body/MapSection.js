import React from "react";
import MapSectionStyle from "./MapSectionStyle.module.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { ReactComponent as ArrowUp } from "../../assets/Body/arrowUp.svg";
import { ReactComponent as RefreshSettings } from "../../assets/Body/refreshSettings.svg";

export default function MapSection() {
  const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
  };

  const center = {
    lat: 24.428823368612584,
    lng: 54.43053116755031,
  };
  const Divs = [
    {
      text: (
        <p>
          Add <br /> Start Point
        </p>
      ),
      color: "#00B76E",
      active: false,
    },
    {
      text: (
        <p>
          Add <br /> Way Point
        </p>
      ),
      color: "#FF9B00",
      active: true,
    },
    {
      text: (
        <p>
          Add <br /> Stop Point
        </p>
      ),
      color: "#FF0000",
      active: false,
    },
  ];

  const Btns = [
    {
      text: "Cancel",
      backgroud: "#ffffff",
      borderColor: "#F9B317",
      textColor: "#FFAF00",
    },
    {
      text: "Save",
      backgroud: "#FFAB00",
      borderColor: "#F9B317",
      textColor: "#FFFFFF",
    },
  ];
  return (
    <div className={MapSectionStyle.Container}>
      <h3>Trip Route</h3>
      <div className={MapSectionStyle.map}>
        <div className={MapSectionStyle.dialog}>
          <div
            className={`${MapSectionStyle.row1} ${MapSectionStyle.bottomBorder}`}
          >
            <div>Trip Route</div>
            <p>
              Draw Trip Route by Adding Start point, Way points, and <br /> End
              point
            </p>
          </div>
          <div
            className={`${MapSectionStyle.row2} ${MapSectionStyle.bottomBorder}`}
          >
            <div className={MapSectionStyle.row2Divs}>
              <div>Trip name</div>
              <div>Trip 2</div>
            </div>
            <div className={MapSectionStyle.row2Divs}>
              <div>Sector</div>
              <div>
                Marina
                <ArrowUp style={{ marginLeft: "40%" }} width="20" height="20" />
              </div>
            </div>
          </div>
          <div
            className={`${MapSectionStyle.row3} ${MapSectionStyle.bottomBorder}`}
          >
            <div>Auto Generate</div>
            <RefreshSettings width="45" height="45" />
          </div>
          <div
            className={`${MapSectionStyle.row4} ${MapSectionStyle.bottomBorder}`}
          >
            {Divs.map((div, index) => {
              return (
                <div key={index} className={MapSectionStyle.row4Divs}>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "18px",
                      color: `${div.active ? "#65769C" : "#65769c8e"}`,
                    }}
                  >
                    {div.text}
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      border: `1px solid ${div.color}`,
                      padding: "3% 30% 3% 30%",
                      borderRadius: "10px",
                      fontSize: "30px",
                      color: `${div.color}`,
                    }}
                  >
                    +
                  </div>
                </div>
              );
            })}
          </div>
          <div className={MapSectionStyle.row5}>
            {Btns.map((btn, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: "45%",
                    border: `1px solid ${btn.borderColor}`,
                    background: `${btn.backgroud}`,
                    height: "75%",
                    borderRadius: "15px",
                    color: `${btn.textColor}`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>{btn.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <LoadScript googleMapsApiKey="AIzaSyDipY_wM8CX-bKGO6fi-5XuDfK1fWg5Jz8">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={19}
          />
        </LoadScript>
      </div>
    </div>
  );
}
