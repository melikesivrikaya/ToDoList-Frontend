import React from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";

export default class Example extends React.Component {
 
  constructor(props) { 
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>

          <NavItem>
            <NavLink href="/" active>
              My Lists
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="users" active>Users</NavLink>
          </NavItem>

          <Dropdown nav isOpen={this.state.dropdownOpen}  toggle={this.toggle}>
            <DropdownToggle nav >
              Me
            </DropdownToggle>
            <DropdownMenu>
                <NavLink href="profile" >Profile</NavLink>
              <DropdownItem divider />
              <NavLink href="setting" >Setting</NavLink>
            </DropdownMenu>
          </Dropdown>
      
        </Nav>
      </div>
    );
  }
}
