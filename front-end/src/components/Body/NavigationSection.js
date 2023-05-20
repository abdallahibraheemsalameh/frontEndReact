import React from "react";
import navigationStyle from "./NavigationSectionStyle.module.css";
import { ReactComponent as ControlPanel } from "../../assets/Navigations/controlPanel.svg";
import { ReactComponent as Home } from "../../assets/Navigations/home.svg";
import { ReactComponent as Reports } from "../../assets/Navigations/reports.svg";
import { ReactComponent as Transaction } from "../../assets/Navigations/transaction.svg";
import { ReactComponent as Map } from "../../assets/Navigations/map.svg";
import QuestionMarkImg from "../../assets/Navigations/questionMark.png";
export default function NavigationSection() {
  const navigationItems = [
    {
      icons: (
        <Home
          width="20"
          height="20"
          className={navigationStyle.navigationIcon}
        />
      ),
      text: "Home",
      active: true,
    },
    {
      icons: (
        <Transaction
          width="20"
          height="20"
          className={navigationStyle.navigationIcon}
        />
      ),
      text: "Operation",
      active: false,
    },
    {
      icons: (
        <Map
          width="20"
          height="20"
          className={navigationStyle.navigationIcon}
        />
      ),
      text: "Map",
      active: false,
    },
    {
      icons: (
        <Reports
          width="20"
          height="20"
          className={navigationStyle.navigationIcon}
        />
      ),
      text: "Reports",
      active: false,
    },
    {
      icons: (
        <ControlPanel
          width="20"
          height="20"
          className={navigationStyle.navigationIcon}
        />
      ),
      text: "Control Panel",
      active: false,
    },
  ];
  
  return (
    <div className={navigationStyle.navigationContainer}>
      <div className={navigationStyle.navigation}>
        {navigationItems.map((navItem, index) => {
          return (
            <div key={index} className={navigationStyle.navigationItem}>
              {navItem.icons}
              <p
                className={`${navigationStyle.navigationText} ${
                  navItem.active ? navigationStyle.navigationTextActive : ""
                }`}
              >
                {navItem.text}
              </p>
            </div>
          );
        })}
      </div>
      {/* ---help box */}

      <div className={navigationStyle.helpBox}>
        <div className={navigationStyle.questionMarkContainer}>
          <img src={QuestionMarkImg} alt="Question Mark"></img>
        </div>

        <div className={navigationStyle.helpBoxContant}>
          <h3>Need Help?</h3>
          <div className={navigationStyle.description}>
            <p>Click here to find</p>
            <br /> <p>functionalities, Help, and More!</p>
          </div>

          <div className={navigationStyle.DiscoverBtn}> Discover</div>
        </div>
      </div>
    </div>
  );
}
