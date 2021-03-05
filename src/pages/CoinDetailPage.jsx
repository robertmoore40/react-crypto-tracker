import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import HistoryChart from "../components/HistoryChart";
import CoinData from "../components/CoinData";

import coinGecko from "../apis/coinGecko";

const CoinDetailPage = () => {
    const { id } = useParams();
    const [coinData, setCoinData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const formatData = (data) => {
        return data.map((el) => {
            return {
                t: el[0],
                y: el[1].toFixed(2),
            };
        });
      };

      useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const [day, week, year, detail] = await Promise.all([
              coinGecko.get(`/coins/${id}/market_chart/`, {
                params: {
                    vs_currency: "usd",
                    days: "1",
                  },
                }),
                coinGecko.get(`/coins/${id}/market_chart/`, {
                  params: {