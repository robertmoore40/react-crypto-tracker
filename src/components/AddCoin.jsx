import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/watchListContext";

const AddCoin = () => {
    const [isActive, setIsActive] = useState(false);

    const { addCoin } = useContext(WatchListContext);

    const availableCoins = [
        "bitcoin",
        "ethereum",
        "ripple",
        "tether",
    "bitcoin-cash",
    "litecoin",
    "eos",
    "okb",