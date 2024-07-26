import React from 'react'
import { useContext, useState } from 'react';
import { AppContext } from './../../AppContext';
import { Link } from 'react-router-dom';
import Cart from './../cart/Cart';
import {



    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
export default function Header() {
    const {count,setCount}=useContext(AppContext)
    const [collapsed, setCollapsed] = useState(true);
    const {cart}=useContext(AppContext)
    const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
       <Navbar color="faded" expand="md">
        <NavbarBrand href="/" className="me-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>

        <Link to="/cart">cart<span>{cart.length}</span></Link>
      </Navbar>
    </div>
  )
}
