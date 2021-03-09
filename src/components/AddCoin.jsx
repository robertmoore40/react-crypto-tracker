import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/watchListContext";

const AddCoin = () => {
    const [isActive, setIsActive] = useState(false);