import React from "react";
import headerStyle from "./Header.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Header/icons8-search.svg";
import { ReactComponent as PlanetEarthIcon } from "../../assets/Header/planet-earth.svg";
import { ReactComponent as NotificationIcon } from "../../assets/Header/bell1.svg";

import { useState } from "react";
import PlanetDropdown from "./DropdownsMenus/PlanetDropdown";
import NotificationDropdown from "./DropdownsMenus/NotificationDropdown";

export default function Header() {
  const [showPlanetDropDown, setShowPlanetDropDown] = useState(false);
  const [shownotificationsDropDown, setShownotificationsDropDown] =
    useState(false);
  return (
    <div className={headerStyle.container}>
      {/* ---------------Logo--------------- */}
      <div className={headerStyle.logo_div}>
        <span className={headerStyle.logo_div_image}>{"  "}</span>
        <span className={headerStyle.logo_div_txt}>Logo</span>
      </div>

      <div className={headerStyle.rightSide}>
        {/* ---------------Search--------------- */}
        <div className={headerStyle.SearchInputContainer}>
          <input
            placeholder="Search"
            type="text"
            className={headerStyle.SearchInput}
          ></input>
          <SearchIcon
            className={headerStyle.SearchInputIcon}
            width="34"
            height="34"
          />
        </div>

        {/* ---------------Languages--------------- */}
        <div className={headerStyle.planetEarthContainerFullView}>
          <div className={headerStyle.planetEarthContainer}>
            <PlanetEarthIcon
              onClick={() => {
                setShowPlanetDropDown(!showPlanetDropDown);
                setShownotificationsDropDown(false);
              }}
              className={headerStyle.planetEarthIcon}
              width="30"
              height="30"
            />
          </div>
          <PlanetDropdown active={showPlanetDropDown} />
        </div>
        {/* ---------------bell--------------- */}
        <div className={headerStyle.notificationFullView}>
          <div className={headerStyle.notificationContainer}>
            <NotificationIcon
              onClick={() => {
                setShownotificationsDropDown(!shownotificationsDropDown);
                setShowPlanetDropDown(false);
              }}
              className={headerStyle.planetEarthIcon}
              width="30"
              height="30"
            />
            <div
              className={
                !shownotificationsDropDown
                  ? headerStyle.redDotActive
                  : headerStyle.redDotInactive
              }
            ></div>
          </div>
          <NotificationDropdown active={shownotificationsDropDown} notificationClicked={()=>setShownotificationsDropDown(!shownotificationsDropDown)} />
        </div>
      </div>
    </div>
  );
}
