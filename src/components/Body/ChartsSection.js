import React from "react";
import chartsSectionStyle from "./ChartsSectionStyle.module.css";
import activeVehicleImg from "../../assets/Body/activeVehicle.png";
import cardsImg from "../../assets/Body/cards.png";
import dectations from "../../assets/Body/dectations.png";
import distance from "../../assets/Body/distance.png";

import ApexCharts from "react-apexcharts";
import "apexcharts/dist/apexcharts.css";

export default function ChartsSection() {
  const options = {
    series: [
      {
        name: "Inactive cars",
        data: [80, 50, 130, 40, 100, 20],
        color: "#1070C5",
      },
      {
        name: "Active cars",
        data: [20, 30, 40, 80, 20, 80],
        color: "#09AEF2",
      },
    ],
    chart: {
      height: 350,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },

    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
    },
  };

  const cards = [
    {
      className: "Div1",
      image: <img src={cardsImg} alt="cards"></img>,
      number: "2,108",
      text: "Total Violations",
    },
    {
      className: "Div2",
      image: <img src={dectations} alt="dectations"></img>,
      number: "100,000",
      text: "Total Dectations",
    },
    {
      className: "Div3",
      image: <img src={activeVehicleImg} alt="activeVehicleImg"></img>,
      number: "48",
      text: "Total Active Vehicles",
    },
    {
      className: "Div4",
      image: <img src={distance} alt="activeVehicleImg"></img>,
      number: "50,000",
      text: "Total Distance in KM",
    },
  ];
  return (
    <div className={chartsSectionStyle.chartsContainer}>
      <div className={chartsSectionStyle.chartDiv}>
        <div className={chartsSectionStyle.chartTitle}>
          <div className={chartsSectionStyle.title}>
            Active Vehicles <br /> Vs. In-Active <br /> Vehicles
          </div>
          <div className={chartsSectionStyle.statuses}>
            <div className={chartsSectionStyle.status}>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  background: "#1785C6",
                  borderRadius: "5px",
                }}
              ></span>
              <span>Active Vehicles</span>
            </div>
            <div className={chartsSectionStyle.status}>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  background: "#BFE7FF",
                  borderRadius: "5px",
                }}
              ></span>
              <span>In-Active Vehicles</span>
            </div>
          </div>
        </div>
        <div className={chartsSectionStyle.chart}>
          <ApexCharts
            options={options}
            series={options.series}
            type="radar"
            height={300}
          />
        </div>
      </div>
      {cards.map((card, index) => {
        return (
          <div
            key={index}
            className={`${chartsSectionStyle[`${card.className}`]}`}
          >
            <div className={chartsSectionStyle.cards}>
              <div className={chartsSectionStyle.cardsImg}>{card.image}</div>
              <h2>{card.number}</h2>
              <div className={chartsSectionStyle.cardsText}>{card.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
