import React, { Component } from 'react';
import { NavbarBrand, Navbar } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <div className="Header text-center">
        <Navbar color="primary" dark>
          <NavbarBrand href="/">TodoMVC</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
