import React from 'react'
import "./navbar.css"
import Image from "./image.png"

export default function Navbar() {
  return (
    <div className="container">
      <div className="nav">
        <div className="image">
          <img src={Image} alt="" srcset="" />
        </div>
        <ul className="navigation">
          <li>
            <a href="#!">Home</a>{" "}
          </li>
          <li>
            <a href="#!"> Events</a>
          </li>
          <li>
            <a href="#!"> Testimonal</a>
          </li>
          <li>
            <a href="#!"> Team </a>
          </li>
          <span className="abc">
            <a href="#!">Join the community</a>
          </span>
        </ul>
      </div>
    </div>
  );
}
