import React from "react";
import "../../styles/GroupChat.scss";
import lalit from "../../assets/lalit.png";
import apurv from "../../assets/apurv.png";
import priyanshu from "../../assets/priyanshu.png";
import utkarsh from "../../assets/utkarsh.png";
import { RiAttachment2 } from "react-icons/ri";
import { FiSend } from "react-icons/fi";

const GroupChat = () => {
  return (
    <div className="groupchat-container">
      <div className="profiles">
        <div className="lalit-profile profile">
          <img src={lalit} alt="" />
          <div className="name-msg">
            <div className="name-time">
              <h4 style={{ color: "#E5896C" }}> Lalit </h4>
              <p className="time">8.07 PM</p>
              <div
                className="badge"
                style={{ color: "#E5896C", border: "1.5px solid #E5896C" }}
              >
                Mentor
              </div>
            </div>
            <p className="msg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              eligendi iste perspiciatis sequi obcaecati nisi iure fugit, quod
              repudiandae ipsam!
            </p>
          </div>
        </div>
        <div className="apurv-profile profile">
          <img src={apurv} alt="" />
          <div className="name-msg">
            <div className="name-time">
              <h4 style={{ color: "#1B20A4" }}> Apurv </h4>
              <p className="time">8.08 PM</p>
              <div
                className="badge"
                style={{ color: "#1B20A4", border: "1.5px solid #1B20A4" }}
              >
                Student
              </div>
            </div>
            <p className="msg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              eligendi iste perspiciatis sequi obcaecati nisi iure fugit, quod
              repudiandae ipsam!
            </p>
          </div>
        </div>
        <div className="lalit-profile profile">
          <img src={priyanshu} alt="" />
          <div className="name-msg">
            <div className="name-time">
              <h4 style={{ color: "#334155" }}> Priyanshu </h4>
              <p className="time">8.17 PM</p>
              <div
                className="badge"
                style={{ color: "#14B8A6", border: "1.5px solid #14B8A6" }}
              >
                Teacher
              </div>
            </div>
            <p className="msg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              eligendi iste perspiciatis sequi obcaecati nisi iure fugit, quod
              repudiandae ipsam!
            </p>
          </div>
        </div>
        <div className="lalit-profile profile">
          <img src={utkarsh} alt="" />
          <div className="name-msg">
            <div className="name-time">
              <h4 style={{ color: "#334155" }}> Utkarsh</h4>
              <p className="time">8.27 PM</p>
              <div
                className="badge"
                style={{ color: "#334155", border: "1.5px solid #334155" }}
              >
                Student
              </div>
            </div>
            <p className="msg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              eligendi iste perspiciatis sequi obcaecati nisi iure fugit, quod
              repudiandae ipsam!
            </p>
          </div>
        </div>
      </div>
      <div className="typing-box">
        <input type="text" placeholder="Type here..." />
        <button className="attachment">
          <RiAttachment2 color="#14B8A6" size={25} />
        </button>
        <button className="send">
          <FiSend size={15} />
        </button>
      </div>
    </div>
  );
};

export default GroupChat;
