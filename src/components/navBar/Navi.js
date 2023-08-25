import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="#" active>List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Me
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Profile</DropdownItem>
              <DropdownItem divider />
              <DropdownItem header>Setting</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </div>
    );
  }
}