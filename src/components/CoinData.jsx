import React from "react";

const CoinData = ({ data }) => {
    const renderData = () => {
        if (data) {
            return (
                <div className="bg-white mt-3 p-2 rounded border row">
                <div className="col-sm">