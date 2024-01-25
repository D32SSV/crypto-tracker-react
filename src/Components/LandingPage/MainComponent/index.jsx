import React from "react";
import "./styles.css";
import Button from "../../Common/Button";
import grad from "../../../assets/gradient.png";
import iphone from "../../../assets/iphone.png";
import { motion } from "framer-motion";
import { duration } from "@mui/material";

function MainComponent() {
  return (
    <div className="container">
      <div className="leftdiv">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="crypto"
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="realtime"
        >
          Real Time.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="text"
        >
          Visit the Dashboard & track crypto in real time
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.75 }}
          className="btnDiv"
        >
          <Button text={"Dashboard"} />
          <Button text={"share"} outLined={true} />
        </motion.div>
      </div>
      <div className="rightdiv">
        <motion.img
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            repeat: Infinity,
            duration: 2,
          }}
          src={iphone}
          className="iphone"
        />
        <img src={grad} className="grad" />
      </div>
    </div>
  );
}

export default MainComponent;
