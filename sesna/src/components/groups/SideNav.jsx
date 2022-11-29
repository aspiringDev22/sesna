import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { TiShoppingBag } from "react-icons/ti";
import { CiMedal } from "react-icons/ci";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import "../../styles/SideNav.scss";
import pfpNav from "../../assets/pfpnav.png";

const SideNav = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="sidenav-container">
      <div className="first-container">
        <AiOutlineArrowLeft
          size={20}
          color="#14B8A6"
          cursor={"pointer"}
          className="btn"
        />
        <div className="button-container">
          <button className="requests btn">Requests</button>
          <button className="add btn">+ Add</button>
        </div>
      </div>
      <div className="second-container">
        <div className="skills">
          <img src={pfpNav} alt="" />
          <h2 className="head">Communication Skills</h2>
        </div>
        <p className="details">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          voluptatem odit natus alias, quam odio magni libero explicabo culpa
          error ipsum voluptatibus veritatis in laudantium praesent
        </p>
      </div>
      <div className="third-container">
        <div className="input-search">
          <input type="text" placeholder="Search sub-communities.." />
          <button className="searchbtn">
            <AiOutlineSearch size={20} />
          </button>
        </div>
        <div className="main-content">
          <div className="first-content">
            <div className="prof">
              {!dropDown ? (
                <button
                  className="right"
                  onClick={() => setDropDown(!dropDown)}
                >
                  <FaAngleRight size={15} />
                </button>
              ) : (
                <button
                  className="dropdownbtn"
                  onClick={() => setDropDown(!dropDown)}
                >
                  <FaAngleDown size={15} />
                </button>
              )}
              <p className="comms">
                <TiShoppingBag className="ikon" /> &nbsp; PROFFESIONALS
              </p>
            </div>
            {dropDown ? (
              <div className="general">
                <p className="">
                  <FaAngleRight /> General
                </p>
                <p className="noti">2</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="second-content">
            <div className="prof">
              {!dropDown ? (
                <button
                  className="right"
                  onClick={() => setDropDown(!dropDown)}
                >
                  <FaAngleRight size={15} />
                </button>
              ) : (
                <button
                  className="dropdownbtn"
                  onClick={() => setDropDown(!dropDown)}
                >
                  <FaAngleDown size={15} />
                </button>
              )}
              <p className="comms">
                <HiOutlineAcademicCap className="ikon" /> &nbsp; TEACHER
              </p>
            </div>
            {dropDown ? (
              <div className="general">
                <p className="">
                  <FaAngleRight /> General
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="third-content">
            <div className="prof">
              {!dropDown ? (
                <button
                  className="right"
                  onClick={() => setDropDown(!dropDown)}
                >
                  <FaAngleRight size={15} />
                </button>
              ) : (
                <button
                  className="dropdownbtn"
                  onClick={() => setDropDown(!dropDown)}
                >
                  <FaAngleDown size={15} />
                </button>
              )}
              <p className="comms">
                <CiMedal className="ikon" /> &nbsp; MENTOR
              </p>
            </div>
          </div>
          <div className="fourth-content">
            <div className="prof">
              {!dropDown ? (
                <button
                  className="right"
                  onClick={() => setDropDown(!dropDown)}
                >
                  <FaAngleRight size={15} />
                </button>
              ) : (
                <button
                  className="dropdownbtn"
                  onClick={() => setDropDown(!dropDown)}
                >
                  <FaAngleDown size={15} />
                </button>
              )}
              <p className="comms">
                <BsPeople className="ikon" /> &nbsp; STUDENTS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
