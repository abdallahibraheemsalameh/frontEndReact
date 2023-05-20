import React from "react";
import bodyStyle from "./BodyStyle.module.css";
import NavigationSection from "./NavigationSection";
import BodySectionOne from "./BodySectionOne";

export default function Body() {
  return (
    <div className={bodyStyle.bodyContainer}>
      <NavigationSection />
      <div className={bodyStyle.bodySectionsContainer}>
        <h4>Welcome! John Doe</h4>
        {/* here new component ⬇ */}
        <BodySectionOne />
      </div>
    </div>
  );
}
