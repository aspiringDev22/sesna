import React from "react";
import "../styles/Activity.scss";
import { BsDot } from "react-icons/bs";

const Activity = () => {
  return (
    <>
      <div className="activity-container">
        <h2 className="header">Activity</h2>
        <div className="wrapper">
          <div className="activity">
            <div className="one">
              <div className="bold">
                <h3>Lalit Tilwani</h3>&nbsp; became
                <span className="highlight">&nbsp; Mentor</span>
                <BsDot color="#14B8A6" />
                33 min
              </div>
            </div>
          </div>
          <hr />
          <div className="activity">
            <div className="one">
              <div className="bold">
                <h3>Lalit Tilwani</h3>&nbsp; joined
                <span className="highlight">&nbsp; Positive Mindset</span>
                <BsDot color="#14B8A6" />
                8h
              </div>
              <p>Keep a smile on face and slay the world!</p>
            </div>
            <div className="two">
              <button>Join</button>
            </div>
          </div>
          <hr />
          <div className="activity">
            <div className="one">
              <div className="bold">
                <h3>Lalit Tilwani</h3>&nbsp; joined
                <span className="highlight">&nbsp; Sports Champs</span>
                <BsDot color="#14B8A6" />
                2d
              </div>
              <p>
                We are a group of sports enthusiasts who believe in health is
                wealth!
              </p>
            </div>
            <button>Join</button>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Activity;
