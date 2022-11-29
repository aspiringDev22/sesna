import React from "react";
import GroupChat from "./GroupChat";
import SideNav from "./SideNav";
import "../../styles/Groups.scss";

const Groups = () => {
  return (
    <div className="group-container">
      <SideNav />
      <GroupChat />
    </div>
  );
};

export default Groups;
