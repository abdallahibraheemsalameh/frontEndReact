import React from "react";
import headerStyle from "./Header.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Header/icons8-search.svg";
import { ReactComponent as PlanetEarthIcon } from "../../assets/Header/planet-earth.svg";
import { ReactComponent as NotificationIcon } from "../../assets/Header/bell1.svg";
import { ReactComponent as HamburgerMenu } from "../../assets/Header/hamburgerMenu.svg";
import logoImg from "../../assets/Header/logo.png";
import { useState } from "react";
import PlanetDropdown from "./DropdownsMenus/PlanetDropdown";
import NotificationDropdown from "./DropdownsMenus/NotificationDropdown";
import ProfileDropdown from "./DropdownsMenus/ProfileDropdown";
export default function Header({ showResponsiveNavProp }) {
  const [showPlanetDropDown, setShowPlanetDropDown] = useState(false);
  const [shownotificationsDropDown, setShownotificationsDropDown] =
    useState(false);
  return (
    <div className={headerStyle.container}>
      <div className={headerStyle.hamburgerMenu}>
        <HamburgerMenu
          onClick={() => showResponsiveNavProp()}
          width="30"
          height="30"
        />
      </div>
      {/* ---------------Logo--------------- */}
      <div className={headerStyle.logo_div}>
        <span className={headerStyle.logo_div_image}>
          <img
            className={headerStyle.logoImage}
            src={logoImg}
            alt="logoImage"
          ></img>
        </span>
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
          {showPlanetDropDown && <PlanetDropdown active={showPlanetDropDown} />}
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
          {shownotificationsDropDown && (
            <NotificationDropdown
              active={shownotificationsDropDown}
              notificationClicked={() =>
                setShownotificationsDropDown(!shownotificationsDropDown)
              }
            />
          )}
        </div>
        <ProfileDropdown />
      </div>
    </div>
  );
}
