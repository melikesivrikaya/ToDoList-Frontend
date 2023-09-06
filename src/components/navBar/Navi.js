import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "../../css/Navi.css";

export default function Navi() {
  const [activeTab , setActiveTab] = useState("Profile")

  return (
    <div className="navi-container">
    <Nav tabs fill>
      <NavItem>
        <NavLink 
          href="/"
          active={activeTab === "My Lists"}
          style={{ color: "pink", fontWeight: "bold" }}
       
        >
          My Lists
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          active={activeTab === "Users"}

          href="users"
          style={{ color: "pink", fontWeight: "bold" }}
        >
          Users
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          active={activeTab === "Profile"}
          href="profile"
     
          style={{ color: "pink", fontWeight: "bold" }}
        >
          Profile
        </NavLink>
      </NavItem>

      {/* <NavItem>
        <NavLink href="profile">Logout / Login</NavLink>
      </NavItem>

      <NavItem>
        <NavLink href="setting">Setting</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/">{this.props.user?.name}</NavLink>
      </NavItem> */}
    </Nav>
  </div>
  )
}

