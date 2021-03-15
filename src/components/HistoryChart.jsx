  
import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "../chartConfigs/chartConfigs";

const HistoryChart = ({ data }) => {
    const chartRef = useRef();
    const { day, week, year, detail } = data;
    const [timeFormat, setTimeFormat] = useState("24h");

    
  const determineTimeFormat = () => {
    switch (timeFormat) {