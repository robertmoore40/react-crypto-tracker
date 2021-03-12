import React, { useEffect, useState, useContext } from "react";
import coinGecko from "../apis/coinGecko";

import { WatchListContext } from "../context/watchListContext";
import Coin from "./Coin";

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const { watchList, deleteCoin } = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);

  console.log(watchList);
  useEffect(() => {