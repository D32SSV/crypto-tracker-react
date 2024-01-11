import React from "react";
import "./styles.css"
import TemporaryDrawer from "./drawer";
import Button from "../Button";

function Header() {
  return (
    <nav className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <a href="#">
          <p className="link">Home</p>
        </a>
        <a href="#">
          <p className="link">Compare</p>
        </a>
        <a href="#">
          <Button text={"Dashboard"} outLined={false}/>
        </a>
        <a href="#">
          <Button text={"share"} outLined={true}/>
        </a>
      </div>
      <div className="drawer"><TemporaryDrawer/></div>
    </nav>
  );
}

export default Header;
