import React from "react";

const CoinData = ({ data }) => {
    const renderData = () => {
        if (data) {
            return (
                <div className="bg-white mt-3 p-2 rounded border row">
                <div className="col-sm">
                <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Market Cap</span>
              <span>{data.market_cap}</span>