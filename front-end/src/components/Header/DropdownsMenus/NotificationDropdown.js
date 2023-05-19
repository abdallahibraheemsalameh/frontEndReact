import React from "react";
import NotificationDropdownStyle from "./NotificationDropdown.module.css";
import { ReactComponent as YellowPlus } from "../../../assets/Header/yellowPlus.svg";
import { ReactComponent as NotificationIcon } from "../../../assets/Header/bell1.svg";

const notifications = [
  {
    time: "12:08 PM",
  },
  {
    time: "23/01/2023",
  },
  {
    time: "23/01/2023",
  },
];

export default function NotificationDropdown({ active, notificationClicked }) {
  const containerClass = active
    ? NotificationDropdownStyle.active
    : NotificationDropdownStyle.inactive;
  return (
    <div onClick={()=>notificationClicked()} className={containerClass}>
      {notifications.map((not) => {
        return (
          <div className={NotificationDropdownStyle.singelNotification}>
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