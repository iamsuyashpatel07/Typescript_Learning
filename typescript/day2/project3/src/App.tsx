import { useState } from "react";
import "./App.css";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import windowqq from "./assets/window.webp";
import surface from "./assets/surface.webp";
import xbox from "./assets/xbox.webp";
import win11 from "./assets/win11.webp";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />

      <ul className="text-center flex flex-wrap list-none justify-center gap-28 md:p-0 p-2 mt-16">
        <li className="flex flex-col justify-center items-center">
          <img
            src={windowqq}
            alt="image"
            style={{ height: "70px", width: "50px", objectFit: "contain" }}
          />
          <a>Choose your Microsoft 365</a>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img
            src={surface}
            alt="image"
            style={{ height: "70px", width: "50px", objectFit: "contain" }}
          />
          <a>Explore Surface devices</a>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img
            src={xbox}
            alt="image"
            style={{ height: "70px", width: "50px", objectFit: "contain" }}
          />
          <a>Buy Xbox games</a>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img
            src={win11}
            alt="image"
            style={{ height: "70px", width: "50px", objectFit: "contain" }}
          />
          <a>Get Windows 11</a>
        </li>
      </ul>
    </>
  );
}

export default App;
