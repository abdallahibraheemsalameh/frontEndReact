import React from "react";
import responsiveNavStyle from "./ResponsiveNavStyle.module.css";

import { ReactComponent as ControlPanel } from "../../assets/Navigations/controlPanel.svg";
import { ReactComponent as Home } from "../../assets/Navigations/home.svg";
import { ReactComponent as Reports } from "../../assets/Navigations/reports.svg";
import { ReactComponent as Transaction } from "../../assets/Navigations/transaction.svg";
import { ReactComponent as Map } from "../../assets/Navigations/map.svg";
import QuestionMarkImg from "../../assets/Navigations/questionMark.png";
export default function ResponsiveNav({ showResponsiveNavProp }) {
  const navigationItems = [
    {
      icons: (
        <Home
          width="20"
          height="20"
          className={responsiveNavStyle.navigationIcon}
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
          className={responsiveNavStyle.navigationIcon}
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
          className={responsiveNavStyle.navigationIcon}
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
          className={responsiveNavStyle.navigationIcon}
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
          className={responsiveNavStyle.navigationIcon}
        />
      ),
      text: "Control Panel",
      active: false,
    },
  ];

  return (
    <div
      onClick={() => showResponsiveNavProp()}
      className={responsiveNavStyle.backDrop}
    >
      <div className={responsiveNavStyle.navigationContainer}>
        <div className={responsiveNavStyle.navigation}>
          {navigationItems.map((navItem, index) => {
            return (
              <div key={index} className={responsiveNavStyle.navigationItem}>
                {navItem.icons}
                <p
                  className={`${responsiveNavStyle.navigationText} ${
                    navItem.active
                      ? responsiveNavStyle.navigationTextActive
                      : ""
                  }`}
                >
                  {navItem.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className={responsiveNavStyle.helpBox}>
          <div className={responsiveNavStyle.questionMarkContainer}>
            <img src={QuestionMarkImg} alt="Question Mark"></img>
          </div>

          <div className={responsiveNavStyle.helpBoxContant}>
            <h3>Need Help?</h3>
            <div className={responsiveNavStyle.description}>
              <p>Click here to find</p>
              <br /> <p>functionalities, Help, and More!</p>
            </div>

            <div className={responsiveNavStyle.DiscoverBtn}> Discover</div>
          </div>
        </div>
      </div>
    </div>
  );
}
