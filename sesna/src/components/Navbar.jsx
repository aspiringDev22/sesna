import React from "react";
// import "../styles/Navbar.scss";
import logo from "../assets/sesnalogonav.png";
import pfp from "../assets/pfpnav.png";
import logout from "../assets/logout.png";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="account">
          <img src={pfp} className="pfp" alt="" />
          <h2 className="user">
            <a href="/">lalit_818</a>
          </h2>
        </div>
        <div className="logout">
          <button>
            <img src={logout} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
