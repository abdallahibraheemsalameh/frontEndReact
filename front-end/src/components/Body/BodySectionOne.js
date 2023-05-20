import React from "react";
import bodySectionOneStyle from "./BodySectionOneStyle.module.css";

import { ReactComponent as SquareMenu } from "../../assets/Body/squareMenu.svg";
import { ReactComponent as HamburgerMenu } from "../../assets/Body/hamMenu.svg";
import SmartVehicle from "./SmartVehicle";
export default function BodySectionOne() {
  return (
    <section className={bodySectionOneStyle.bodySectionOne}>
      <div className={bodySectionOneStyle.vParkContainer}>
        <div className={bodySectionOneStyle.vParkContainerHeader}>
          <h3>VPark Fleet</h3>
          <div className={bodySectionOneStyle.vParkContainerHeaderIcons}>
            <div className={bodySectionOneStyle.SquareMenu}>
              <SquareMenu
                style={{ marginTop: "10px" }}
                width="40"
                height="40"
              />
            </div>
            <div className={bodySectionOneStyle.HamburgerMenu}>
              <HamburgerMenu
                style={{ marginTop: "10px" }}
                width="40"
                height="40"
              />
            </div>
          </div>
        </div>
        {/* ------------------------------- */}
        <div className={bodySectionOneStyle.SmartVehiclesList}>
        <SmartVehicle dotColor="#F9B317" />
        <SmartVehicle dotColor="#00AB80" />
        <SmartVehicle dotColor="#00AB80" />
        <SmartVehicle dotColor="#F9B317" />
        <SmartVehicle dotColor="#E63438" />
        <SmartVehicle dotColor="#00AB80" />
        <SmartVehicle dotColor="#00AB80" />
        <SmartVehicle dotColor="#F9B317" />
        <SmartVehicle dotColor="#E63438" />
        <SmartVehicle dotColor="#00AB80" />
        <SmartVehicle dotColor="#00AB80" />
        </div>


    
      </div>

      <div className={bodySectionOneStyle.chartsContainer}></div>
    </section>
  );
}
