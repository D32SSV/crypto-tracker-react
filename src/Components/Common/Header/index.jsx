import React, { useEffect, useState } from "react";
import "./styles.css";
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") != "dark") {
      setDark();
    } else {
      setLight();
    }
    setDarkMode(!darkMode);
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="logo">
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </Link>
      <div className="links">
        <Switch
          checked={darkMode}
          onClick={() => changeMode()}
          checkedIcon={<LightModeRoundedIcon sx={{ color: "white" }} />}
          icon={<DarkModeRoundedIcon sx={{ color: "red" }} />}
        />
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/dashboard">
          <Button text={"Dashboard"} outLined={false} />
        </Link>
        <Link to="/watchlist">
          <Button text={"watchlist"} outLined={true} />
        </Link>
      </div>
      <div className="drawer">
        <TemporaryDrawer />
      </div>
    </nav>
  );
}

export default Header;
