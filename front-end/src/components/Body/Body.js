import React from "react";
import bodyStyle from "./BodyStyle.module.css";
import NavigationSection from "./NavigationSection";
export default function Body() {
  return (
    <div className={bodyStyle.bodyContainer}>
      <NavigationSection />
    </div>
  );
}
