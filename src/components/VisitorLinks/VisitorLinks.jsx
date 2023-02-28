import React from 'react'
import { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const VisitorLinks = () => {
  const [activeLink, setActiveLink] = useState('home')
  const navigate = useNavigate()

  const homePage = () => {
    setActiveLink('home')
    navigate('/home')
  }

  const signUpPage = () => {
    setActiveLink('signup')
    navigate('/signup')
  }

  const missionPage = () => {
    setActiveLink('mission')
    navigate('/mission')
  }

  const loginPage = () => {
    setActiveLink('login')
    navigate('/login')
  }

  const tarifPage = () => {
    setActiveLink('tarification')
    navigate('/tarification')
  }

  const contactPage = () => {
    setActiveLink('contact')
    navigate('/contact')
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
          activeLink === 'signup' ? 'active text-white fw-bold' : 'text-dark'
        }`}
        onClick={signUpPage}
      >
        Inscription
      </Nav.Link>

      <Nav.Link
        className={`ms-3 ${
          activeLink === 'login' ? 'active text-white fw-bold' : 'text-dark'
        }`}
        onClick={loginPage}
      >
        Connexion
      </Nav.Link>

      <Nav.Link
        className={`ms-3 ${
          activeLink === 'tarification'
            ? 'active text-white fw-bold'
            : 'text-dark'
        }`}
        onClick={tarifPage}
      >
        Tarification
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
    </Nav>
  )
}

export default VisitorLinks
