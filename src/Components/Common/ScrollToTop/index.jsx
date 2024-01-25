import React from "react";
import "./style.css";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";

function ScrollToTop() {
  let mybutton = document.getElementById("goToTopBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }
  return (
    <div
      className="scrollToTop"
      id="goToTopBtn"
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <NorthRoundedIcon style={{ color: "var(--blue)" }} />
    </div>
  );
}

export default ScrollToTop;
