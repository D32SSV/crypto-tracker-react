import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { get100Coins } from "../../../functions/get100Coins";
import "./styles.css";

function SelectCoins({ crypto1, crypto2, handleCoinChange }) {
  const [allCoins, setAllCoins] = useState([]);

  const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
  };

  return (
    <div className="outer_div">
      <p>Crypto 1</p>
      <Select
        label="Crypto 1"
        value={crypto1}
        onChange={(e) => handleCoinChange(e, false)}
        sx={style}
      >
        {allCoins
          .filter((item) => item.id != crypto2)
          .map((coin, i) => (
            <MenuItem value={coin.id} key={i}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>

      <p>Crypto 2</p>
      <Select
        label="Crypto 2"
        value={crypto2}
        onChange={(e) => handleCoinChange(e, true)}
        sx={style}
      >
        {allCoins
          .filter((item) => item.id != crypto1)
          .map((coin, i) => (
            <MenuItem value={coin.id} key={i}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
}

export default SelectCoins;
