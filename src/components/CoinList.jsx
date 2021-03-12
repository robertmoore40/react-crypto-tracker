import React, { useEffect, useState, useContext } from "react";
import coinGecko from "../apis/coinGecko";

import { WatchListContext } from "../context/watchListContext";
import Coin from "./Coin";