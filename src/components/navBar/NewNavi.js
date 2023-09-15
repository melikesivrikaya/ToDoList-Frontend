import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "../../css/Navi.css";
export default function NewNavi() {
  return (
    <div style={{ backgroundColor: "whitesmoke", marginBottom: 5 }}>
      <Nav className="navi-container">
        <NavItem className="navi-item">
          <NavLink href="/" className="navi-link" style={{ color: "pink" }}>
            My List
          </NavLink>
        </NavItem>
        <NavItem className="navi-item">
          <NavLink      
            href="/users"
            className="navi-link"
            style={{ color: "pink" }}
          >
            Users
          </NavLink>
        </NavItem>
        <NavItem className="navi-item">
          <NavLink
            href="setting"
            className="navi-link"
            style={{ color: "pink" }}
          >
            Setting
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
