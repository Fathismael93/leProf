import { doc, getDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { Container, Form, Button, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { db } from '../../firebase.config'
import { ADMINS_COLLECTION } from '../../utils/constants'

const Connexion = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const signin = async (e) => {
    e.preventDefault()
    setLoading(true)

    const docSnap = getDoc(doc(db, ADMINS_COLLECTION, email))
    docSnap.then((querySnapshot) => {
      const data = querySnapshot.data()

      if (data) {
        if (password === data.password) {
          setLoading(false)
          navigate('/dashboard')
        } else {
          setLoading(false)
          navigate('/login')
        }
      } else {
        setLoading(false)
        navigate('/login')
      }
    })
  }

  return (
    <Container className="pt-5">
      <h3 className="d-flex justify-content-center fw-bold mb-4">Connexion</h3>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Form onSubmit={signin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Votre email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Votre mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-flex justify-content-center pt-2">
            <Button variant="primary" type="submit">
              Se connecter
            </Button>
          </div>
        </Form>
      )}
    </Container>
  )
}

export default Connexion
