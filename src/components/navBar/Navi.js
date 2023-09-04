import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "../../css/Navi.css";
export default class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navi-container">
        <Nav tabs fill>

          <NavItem>
            <NavLink href="/">My Lists</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="users">Users</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="profile">Profile</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="profile">Logout / Login</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="setting">Setting</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
