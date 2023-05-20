import React from "react";
import { useState } from "react";
import ProfileDropdownStyle from "./ProfileDropdownStyle.module.css";
import profileImage from "../../../assets/Header/person.jfif";
import { ReactComponent as ArrowUp } from "../../../assets/Header/arrowUp.svg";
import { ReactComponent as Account } from "../../../assets/Header/account.svg";
import { ReactComponent as ArrowRight } from "../../../assets/Header/arrowRight.svg";
import { ReactComponent as Settings } from "../../../assets/Header/settings.svg";
import { ReactComponent as Power } from "../../../assets/Header/power.svg";

export default function ProfileDropdown() {
  const [rotateArrow, setRotateArrow] = useState(false);
  const lists = [
    {
      icon: (
        <Account
          className={ProfileDropdownStyle.dropDownListItemIcons}
          width="25"
          height="25"
        />
      ),
      text: "Account",
    },
    {
      icon: (
        <Settings
          className={ProfileDropdownStyle.dropDownListItemIcons}
          width="25"
          height="25"
        />
      ),
      text: "Settings",
    },
    {
      icon: (
        <Power
          className={ProfileDropdownStyle.dropDownListItemIcons}
          width="25"
          height="25"
        />
      ),
      text: "Log out",
    },
  ];
  return (
    <div className={ProfileDropdownStyle.profileFullView}>
      <div
        className={`${ProfileDropdownStyle.profileSection} ${
          rotateArrow ? ProfileDropdownStyle.profileSectionOpened : ""
        }`}
      >
        <div className={ProfileDropdownStyle.imageContainer}>
          <img
            src={profileImage}
            className={ProfileDropdownStyle.image}
            alt="Girl in a jacket"
          />
        </div>
        <div
          onClick={() => setRotateArrow(!rotateArrow)}
          className={ProfileDropdownStyle.profileInfo}
        >
          <div>John Doe</div>
          <div>Admin</div>
        </div>
        <div
          onClick={() => setRotateArrow(!rotateArrow)}
          className={`${ProfileDropdownStyle.arrowContainer} ${
            rotateArrow ? ProfileDropdownStyle.rotateArrow : ""
          }`}
        >
          <ArrowUp
            className={ProfileDropdownStyle.arrow}
            width="22"
            height="22"
          />
        </div>
      </div>
      <div
        className={`${ProfileDropdownStyle.dropDown} ${
          rotateArrow ? ProfileDropdownStyle.droped : ""
        }`}
      >
        <div
          className={`${
            rotateArrow
              ? ProfileDropdownStyle.dropDownListItems
              : ProfileDropdownStyle.hideDropDownListItems
          }`}
        >
          {lists.map((list, index) => {
            return (
              <div
                key={index}
                onClick={() => setRotateArrow(!rotateArrow)}
                className={ProfileDropdownStyle.dropDownListItem}
              >
                {list.icon}
                <div className={ProfileDropdownStyle.dropDownListItemTexts}>
                  {list.text}
                </div>
                <ArrowRight
                  className={ProfileDropdownStyle.dropDownListItemArrows}
                  width="20"
                  height="20"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
