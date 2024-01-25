import React from "react";
import "./styles.css"
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <Link to="/"><h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1></Link>
      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/dashboard">
          <Button text={"Dashboard"} outLined={false}/>
        </Link>
        <Link to="/share">
          <Button text={"watchlist"} outLined={true}/>
        </Link>
      </div>
      <div className="drawer"><TemporaryDrawer/></div>
    </nav>
  );
}

export default Header;
