import React from "react";
import PlanetDropdownStyle from "./PlanetDropdown.module.css";
import { ReactComponent as UkFlag } from "../../../assets/Header/ukFlag.svg";
import { ReactComponent as UaeFlag } from "../../../assets/Header/uaeFlag.svg";

export default function PlanetDropdown({ active }) {
  const containerClass = active
    ? PlanetDropdownStyle.active
    : PlanetDropdownStyle.inactive;
  return (
    <div className={containerClass}>
      <div className={PlanetDropdownStyle.contentDiv}>
        <div>
          <span>
            <UkFlag width="15" height="15" style={{ marginRight: "5px" }} />
          </span>
          English
        </div>
        <div>
          <span>
            <UaeFlag width="15" height="15" style={{ marginRight: "5px" }} />
          </span>
          عربي
        </div>
      </div>
    </div>
  );
}
