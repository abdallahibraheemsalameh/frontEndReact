import React from "react";
import headerStyle from "./Header.module.css";
import { ReactComponent as Icon } from "../../assets/Header/icons8-search.svg";
export default function Header() {
  return (
    <div className={headerStyle.container}>
      <div className={headerStyle.logo_div}>
        <span className={headerStyle.logo_div_image}>{"  "}</span>
        <span className={headerStyle.logo_div_txt}>Logo</span>
      </div>

      <div className={headerStyle.rightSide}>
        <div className={headerStyle.SearchInputContainer}>
          <input
            placeholder="Search"
            type="text"
            className={headerStyle.SearchInput}
          ></input>
          <Icon
            className={headerStyle.SearchInputIcon}
            style={{
              fill: "#0087CC",
              stroke: "#0087CC",
              cursor: "pointer",
              strokeWidth: "1.3",
              filter: "drop-shadow(-1px 2px 3px rgba(0, 0, 0, 0.5))",
            }}
            width="34"
            height="34"
          />
        </div>
      </div>
    </div>
  );
}
