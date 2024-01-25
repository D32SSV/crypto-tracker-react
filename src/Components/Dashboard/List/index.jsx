import React from "react";
// import "../Grid/styles.css"
import "./styles.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/convertNumber";

function List({ coin }) {
  return (
    <tr
      className={`row ${
        coin.price_change_percentage_24h > 0 ? "profit" : "loss"
      }`}
    >
      <Tooltip
        title="Coin Logo"
        arrow
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [50, -17],
                },
              },
            ],
          },
        }}
      >
        <td className="td_image">
          <img src={coin.image} className="coin-logo" />
        </td>
      </Tooltip>
      <td className="nameNSymbol">
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </td>
      <Tooltip
        title="Change in price in 24Hrs"
        arrow
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [50, -7],
                },
              },
            ],
          },
        }}
      >
        {coin.price_change_percentage_24h > 0 ? (
          <td className="priceChange">
            <div className="price">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="trending">
              <TrendingUpRoundedIcon />
            </div>
          </td>
        ) : (
          <td className="priceChange ">
            <div className="price priceRed">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="trending priceRed">
              <TrendingDownRoundedIcon />
            </div>
          </td>
        )}
      </Tooltip>
      <Tooltip
        title="Current Price"
        arrow
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -24],
                },
              },
            ],
          },
        }}
      >
        <td>
          <h3
            className="coin_price_center_align"
            style={{
              color:
                coin.price_change_percentage_24h > 0
                  ? "greenyellow"
                  : "var(--red)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </td>
      </Tooltip>
      <Tooltip
        title="Total Volume"
        arrow
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [50, -24],
                },
              },
            ],
          },
        }}
      >
        <td className="desktop_td">
          <p className="totalVol right_align">
            $ {coin.total_volume.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip
        title="Total Volume"
        arrow
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [50, -24],
                },
              },
            ],
          },
        }}
      >
        <td className="mobile_td totalVolList">
          <p className="totalVol right_align">
            $ {convertNumber(coin.total_volume.toLocaleString())}
          </p>
        </td>
      </Tooltip>
      <Tooltip
        title="Market Cap"
        arrow
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [50, -24],
                },
              },
            ],
          },
        }}
      >
        <td className="desktop_td">
          <p className="marketCap right_align">
            $ {coin.market_cap.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip
        title="Market Cap"
        arrow
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [50, -24],
                },
              },
            ],
          },
        }}
      >
        <td className="mobile_td totalCapList">
          <p className="marketCap right_align">
            $ {convertNumber(coin.market_cap.toLocaleString())}
          </p>
        </td>
      </Tooltip>
    </tr>
  );
}

export default List;
