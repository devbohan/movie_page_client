import React from "react";
import {Navbar, NavbarBrand} from 'reactstrap'
function Header() {
  return (
    <Navbar color="primary" dark className="mb-4">
        <NavbarBrand href="/">movie list</NavbarBrand>
    </Navbar>
  );
}

export default Header;
