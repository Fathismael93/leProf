import React from 'react'

import { Navbar, NavbarBrand } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import HeaderLinks from '../HeaderLinks/HeaderLinks'
import logo from '../../assets/leprof-logo.png'

const Header = () => {
  const navigate = useNavigate()

  const homePage = () => {
    navigate('/home')
  }

  return (
    <Navbar className="shadow p-3 mb-5" bg="primary" expand="md">
      <NavbarBrand
        onClick={homePage}
        className="text-uppercase fw-bold mb-1 mx-5"
      >
        <img src={logo} alt="Logo du prof" />
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <HeaderLinks />
    </Navbar>
  )
}

export default Header
