import React from "react";
import { Link } from "react-router-dom";


const Coin = ({ coin, deleteCoin }) => {
    return (
        <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
        <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
        <img className="coinlist-image" src={coin.image} alt="" />
        <span className="text-decoration-none">{coin.current_price}</span>