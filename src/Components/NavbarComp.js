import React, { useState } from "react";
import "../App.css";

function NavbarComp() {
  const [navbarFixed, setNavbarFixed] = useState(false);

  let oldLastKnownScrollY = 0;
  let newLastKnownScrollY = 0;
  let ticking = false;

  //check for scroll
  document.addEventListener("scroll", (event) => {
    console.log(window.scrollY);
    newLastKnownScrollY = window.scrollY;

    if (!ticking && newLastKnownScrollY < oldLastKnownScrollY) {
      //only run this code if scrolling up
      window.requestAnimationFrame(() => {
        onScrollUp();
        ticking = false;
      });

      ticking = true;
    } else {
      onScrollDown();
    }

    oldLastKnownScrollY = newLastKnownScrollY;
  });

  <script src="script.js" />;

  function onScrollUp() {
    console.log("going up");
    setNavbarFixed(true);
  }

  function onScrollDown() {
    console.log("going down");
    setNavbarFixed(false);
  }

  return (
    <div>
      <div className={"navbar"}>NAVBAR!</div>
      {navbarFixed === true && (
        <div className={navbarFixed ? "navbar-sticky" : ""} id="navbar">
          NAVBAR!
        </div>
      )}
    </div>
  );
}

export default NavbarComp;
