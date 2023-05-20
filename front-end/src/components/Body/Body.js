import React from "react";
import bodyStyle from "./BodyStyle.module.css";
import NavigationSection from "./NavigationSection";
import BodySectionOne from "./BodySectionOne";
import settingsImg from "../../assets/Body/settings.png";

export default function Body() {
  return (
    <div className={bodyStyle.bodyContainer}>
      <NavigationSection />
      <div className={bodyStyle.bodySectionsContainer}>
        <h4>Welcome! John Doe</h4>
        {/* here new component ⬇ */}
        <BodySectionOne />
        <div className={bodyStyle.settingsDivContiner}>
          <img
            className={bodyStyle.settingsImg}
            src={settingsImg}
            alt="settingsImg"
          ></img>
          <div className={bodyStyle.settingsDescription}>
            <h3>
              Get a bird's eye <span style={{ color: "#F9B419" }}>view</span> in
              a snap.
            </h3>
            <h6>
              We equip with the tools to customise your dashboards and track
              fleet status,
              <br />
              decorations, and violations at a glance.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
