import React from "react";
import "./styles.css";
import Button from "../../Common/Button";
import grad from "../../../assets/gradient.png"
import iphone from "../../../assets/iphone.png"

function MainComponent() {
  return (
    <div className="container">
      <div className="leftdiv">
        <h1 className="crypto">Track Crypto</h1>
        <h1 className="realtime">Real Time.</h1>
        <p className="text">Visit the Dashboard & track crypto in real time</p>
        <div className="btnDiv">
            <Button text={"Dashboard"}/>
            <Button text={"share"} outLined={true}/>
        </div>
      </div>
      <div className="rightdiv">
        <img src={iphone} className="iphone"/>
        <img src={grad} className="grad"/>
      </div>
    </div>
  );
}

export default MainComponent;
