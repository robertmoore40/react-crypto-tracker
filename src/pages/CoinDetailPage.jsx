import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import HistoryChart from "../components/HistoryChart";
import CoinData from "../components/CoinData";

import coinGecko from "../apis/coinGecko";

const CoinDetailPage = () => {
    const { id } = useParams();
    const [coinData, setCoinData] = useState({});
    const [isLoading, setIsLoading] = useState(false);