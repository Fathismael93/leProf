import React, { useState } from 'react'

import { Container, Form, Button, Spinner } from "react-bootstrap"
import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import Helmet from '../../components/Helmet/Helmet'
import { connectUser } from '../../utils/dbMethods'


const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const signin = async(e)=>{
    e.preventDefault()
    setLoading(true)

    connectUser(dispatch, navigate, email, password, setLoading, setError)
  }

  return (
    <Helmet title='Connexion'>
    <Container className='pt-5'>
      <h3 className='d-flex justify-content-center fw-bold mb-4'>Connexion</h3>

      {
        loading ? 
          <div className='d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="primary" />
          </div> :
          (
            <Form onSubmit={signin}>
              <p className='text-danger mb-3'>{error}</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Votre email"  onChange={e=>setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Votre mot de passe"  onChange={e=>setPassword(e.target.value)}/>
            </Form.Group>

            <div className='d-flex justify-content-center pt-2'>
              <Button
                variant="primary"
                type="submit">
                  Se connecter
              </Button>
            </div>
          </Form>
          )
      }
      
    </Container>
    </Helmet>
  )
}

export default Login
