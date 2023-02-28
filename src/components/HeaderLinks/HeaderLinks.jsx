import React from 'react'
import { Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/selectors'
import UserLinks from '../UserLinks/UserLinks'
import VisitorLinks from '../VisitorLinks/VisitorLinks'

const HeaderLinks = () => {
  const user = useSelector(selectUser)

  return (
    <Navbar.Collapse id="basic-navbar-nav" className="ms-5">
      {user ? <UserLinks /> : <VisitorLinks />}
    </Navbar.Collapse>
  )
}

export default HeaderLinks
