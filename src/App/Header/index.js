import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="dark" light expand="md">
            <NavbarBrand tag={Link} to="/">HOME</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/user">USER</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
      );
    }

export default Header;