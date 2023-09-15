import React, { useContext } from "react";
import { Nav, NavItem, NavLink, CardImg } from "reactstrap";
import "../../css/Navi.css";
import { Flex, useColorMode } from "@chakra-ui/react";
import { UserContext } from "../../context/UserContext";
export default function Navi() {
  const { user } = useContext(UserContext);

  return (
    <div style={{ backgroundColor: "whitesmoke", marginBottom: 5 }}>
      <Nav className="navi-container" style={{ alignItems: "center"}}>
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
            href="profile"
            className="navi-link"
            style={{ color: "pink" }}
          >
            Profile
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

        <div style={{display : "flex"}}>
          <NavItem>
            <CardImg
              style={{ borderRadius: 30, width: 40, height: 40 }}
              src={`${user?.profilFotoUrl}`}
            />
          </NavItem>{" "}
          <NavItem className="navi-item" style={{ color: "#20c997" , marginLeft : 10}}>
            {user?.name}
          </NavItem>
        </div>
      </Nav>
    </div>
  );
}
