import React from "react";
import "./styles.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

function Grid({ coin }) {
  return (
    <div
      className={`grid-container ${
        coin.price_change_percentage_24h < 0 && "gridContainerRed"
      }`}
    >
      <div className="info-flex">
        <img src={coin.image} className="coin-logo" />
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>
      {coin.price_change_percentage_24h > 0 ? (
        <div className="priceChange">
          <div className="price">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="trending">
            <TrendingUpRoundedIcon />
          </div>
        </div>
      ) : (
        <div className="priceChange ">
          <div className="price priceRed">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="trending priceRed">
            <TrendingDownRoundedIcon />
          </div>
        </div>
      )}
      <div className="priceContainer">
        <h3
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "greenyellow"
                : "var(--red)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
        <p className="totalVol">
          Total Volume : $ {coin.total_volume.toLocaleString()}
        </p>
        <p className="marketCap">
          Market Cap : $ {coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default Grid;
