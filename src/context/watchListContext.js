import React, { createContext, useState, useEffect } from "react";

export const WatchListContextProvider = (props) => {
    console.log();

    const [watchList, setWatchList] = useState(
        localStorage.getItem("watchList").split(",") || [
            "bitcoin",
            "ethereum",
            "ripple",
            "litecoin",
          ]
        );

        useEffect(() => {
            localStorage.setItem("watchList", watchList);
          }, [watchList]);