import React from "react";
import VehicleSectionStyle from "./VehicleSectionStyle.module.css";
import ChartsSection from "./ChartsSection"
import { ReactComponent as SquareMenu } from "../../assets/Body/squareMenu.svg";
import { ReactComponent as HamburgerMenu } from "../../assets/Body/hamMenu.svg";
import SmartVehicle from "./SmartVehicle";
export default function VehicleSection() {
  return (
    <section className={VehicleSectionStyle.VehicleSection}>
      <div className={VehicleSectionStyle.vParkContainer}>
        <div className={VehicleSectionStyle.vParkContainerHeader}>
          <h3>VPark Fleet</h3>
          <div className={VehicleSectionStyle.vParkContainerHeaderIcons}>
            <div className={VehicleSectionStyle.SquareMenu}>
              <SquareMenu
                style={{ marginTop: "10px" }}
                width="40"
                height="40"
              />
            </div>
            <div className={VehicleSectionStyle.HamburgerMenu}>
              <HamburgerMenu
                style={{ marginTop: "10px" }}
                width="40"
                height="40"
              />
            </div>
          </div>
        </div>
        {/* ------------------------------- */}
        <div className={VehicleSectionStyle.SmartVehiclesList}>
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
      <ChartsSection/>
    </section>
  );
}
