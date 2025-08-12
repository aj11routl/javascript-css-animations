import NavbarComp from "../Components/NavbarComp";
import "../App.css";
import React, { useState } from "react";
import "animate.css";
import { Link } from "react-router-dom";

/* 
1. detect scroll up/down
2. have nav stick to top of screen on scroll up
2.5. on scroll up, animate
3. on scroll down, have nav be scrolled out of view (instead of immediately disappearing) 

*/
function Page2() {
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

  function onScrollUp() {
    console.log("going up");
    setNavbarFixed(true);
  }

  function onScrollDown() {
    console.log("going down");
    setNavbarFixed(false);
  }

  function clickHappen() {
    console.log("click");
    setNavbarFixed(!navbarFixed);
  }

  return (
    <div>
      <div className="header">
        <NavbarComp />
        {navbarFixed === true && (
          <div className={navbarFixed ? "navbar-still" : ""} id="navbar">
            NAVBAR!
          </div>
        )}
        PAGE 2
      </div>
      <div className="content">
        <button onClick={clickHappen}>Toggle sticky</button>
        <Link to="/">
          <button className="my-button">Go to page 1</button>
        </Link>
        <p>
          Lorem ipsum 11111 dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis
          convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
          fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
          malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos
          himenaeos.
        </p>
        <p>
          Lorem ipsum 22222222222 dolor sit amet consectetur adipiscing elit.
          Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
          cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
          urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
          egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos. Tempus leo eu aenean sed diam
          urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
          egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos. Tempus leo eu aenean sed diam
          urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
          egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
        <button onClick={clickHappen}>Toggle sticky</button>

        <p>
          Lorem ipsum 22222222222 dolor sit amet consectetur adipiscing elit.
          Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
          cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
          urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
          egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos. Tempus leo eu aenean sed diam
          urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
          egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos. Tempus leo eu aenean sed diam
          urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
          egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
        <p>
          Lorem ipsum 22222222222 dolor sit amet consectetur adipiscing elit.
          Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
          cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
          urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
          egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos. Tempus leo eu aenean sed diam
          urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
          egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos. Tempus leo eu aenean sed diam
          urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
          egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
      </div>
    </div>
  );
}

export default Page2;
