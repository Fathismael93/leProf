import React from 'react'
import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signout } from '../../utils/dbMethods'
import { useState } from 'react'

const UserLinks = () => {
  const [activeLink, setActiveLink] = useState('profilUser')
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const homePage = () => {
    setActiveLink('home')
    navigate('/home')
  }

  const contactPage = () => {
    setActiveLink('contact')
    navigate('/contact')
  }

  const missionPage = () => {
    setActiveLink('mission')
    navigate('/mission')
  }

  const profilUser = () => {
    setActiveLink('profilUser')
    navigate('/profilUser')
  }

  const logout = () => {
    signout(dispatch, navigate)
  }

  return (
    <Nav className="me-auto">
      <Nav.Link
        className={`ms-3 ${
          activeLink === 'home' ? 'active text-white fw-bold' : 'text-dark'
        }`}
        onClick={homePage}
      >
        Accueil
      </Nav.Link>

      <Nav.Link
        className={`ms-3 ${
          activeLink === 'profilUser'
            ? 'active text-white fw-bold'
            : 'text-dark'
        }`}
        onClick={profilUser}
      >
        Profil
      </Nav.Link>

      <Nav.Link
        className={`ms-3 ${
          activeLink === 'mission' ? 'active text-white fw-bold' : 'text-dark'
        }`}
        onClick={missionPage}
      >
        Mission
      </Nav.Link>

      <Nav.Link
        className={`ms-3 ${
          activeLink === 'contact' ? 'active text-white fw-bold' : 'text-dark'
        }`}
        onClick={contactPage}
      >
        Contact
      </Nav.Link>

      <Nav.Link className="ms-3 text-white" onClick={logout}>
        Se déconnecter
      </Nav.Link>
    </Nav>
  )
}

export default UserLinks
