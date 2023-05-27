import React from "react";
import NotificationDropdownStyle from "./NotificationDropdownStyle.module.css";
import { ReactComponent as YellowPlus } from "../../../assets/Header/yellowPlus.svg";
import { ReactComponent as NotificationIcon } from "../../../assets/Header/bell1.svg";

const notifications = [
  {
    time: "12:08 PM",
    fadded: false,
  },
  {
    time: "23/01/2023",
    fadded: true,
  },
  {
    time: "23/01/2023",
    fadded: true,
  },
];

export default function NotificationDropdown({ active, notificationClicked }) {
  const containerClass = active ? NotificationDropdownStyle.active : "";
  return (
    <div
      onClick={() => notificationClicked()}
      className={`${NotificationDropdownStyle.inactive} ${containerClass}`}
    >
      {notifications.map((not) => {
        return (
          <div
            className={`${NotificationDropdownStyle.singelNotification} ${
              not.fadded ? NotificationDropdownStyle.fadded : ""
            }`}
          >
            <div className={NotificationDropdownStyle.left}>
              <NotificationIcon
                style={{
                  fill: "#FFAF00",
                  opacity: 0.2,
                }}
                width="70%"
                height="70%"
              />
              <YellowPlus
                className={NotificationDropdownStyle.yellowPlus}
                width="10"
                height="10"
              />
            </div>

            <div className={NotificationDropdownStyle.middle}>
              <div>GIS Data Request</div>
              <div>
                Ahmad Khalil is Waiting for approval to Add New GIS Data{" "}
              </div>
            </div>

            <div className={NotificationDropdownStyle.right}>
              <div>{not.time}</div>
              <div className={NotificationDropdownStyle.showText}>
                <div>{`Show`}</div>
                <div>{`>`}</div>
              </div>
            </div>
          </div>
        );
      })}
      <div className={NotificationDropdownStyle.seeAll}>See All</div>
    </div>
  );
}
