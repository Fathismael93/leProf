import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { Container, Form, Button, Spinner } from 'react-bootstrap';

import { toast } from 'react-toastify';
import { addUser } from '../../utils/dbMethods';
import Helmet from '../../components/Helmet/Helmet';

const Signup = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passConfirmation, setPassConfirmation] = useState('')
  const [errorPass, setErrorPass] = useState('')
  const [userSex, setSex] = useState('')
  const [loading, setLoading] = useState(false)

  const signup = async(e)=> {
    e.preventDefault()
    e.stopPropagation()

    if (password !== passConfirmation) {
      toast.error('Les mots de passe ne sont pas identiques')
      setErrorPass('Les mots de passe ne sont pas identiques')
    } else {
      setLoading(true)
      addUser(username, email, password, phone, userSex, setLoading, navigate)
    }
  }

  return (
    <Helmet title='Inscription'>
    <Container className='pt-5'>
      <h3 className='d-flex justify-content-center fw-bold mb-4'>Bienvenue</h3>
      <h5 className='d-flex justify-content-center mb-3'>Formulaire d'inscription</h5>
      {
        loading ?
        (
          <div className='d-flex justify-content-center align-items-center'>
              <Spinner animation="border" variant="primary" />
          </div>
        )  
          : 
            
      <Form onSubmit={signup}>
        <Form.Label>Nom complet</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ex: Houssein Hassan Houmed"
            className="mb-4" 
            onChange={e=>setUsername(e.target.value)}
        />

      <Form.Group className="mb-4" controlId="formBasicTel">
          <Form.Label>Numéro de télephone</Form.Label>
          <Form.Control
            required
            type="tel"
            placeholder="Ex: 77-018888"
            pattern='[7]{2}-[0-9]{6}'
            onChange={e=>setPhone(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required type="email" placeholder="Ex: test@test.com" onChange={e=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            required type="password" placeholder="*************" onChange={e=>setPassword(e.target.value)}/>
          <Form.Text className="text-light bg-danger">{errorPass}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassConfirmation">
          <Form.Label>Confirmer mot de passe</Form.Label>
          <Form.Control
            required type="password" placeholder="**********" onChange={e=>setPassConfirmation(e.target.value)}/>
          <Form.Text className="text-light bg-danger">{errorPass}</Form.Text>        
        </Form.Group>

        <div key='inline-radio' className="mb-4">
          <Form.Check
            inline
            label="Masculin"
            name="sex"
            type="radio"
            id='masculin'
            value='masculin'
            onChange={e=>setSex(e.target.value)}
          />
          <Form.Check
            inline
            label="Féminin"
            name="sex"
            type="radio"
            id='feminin'
            value='feminin'
            onChange={e=>setSex(e.target.value)}
          />
        </div>

        <div className='d-flex justify-content-center pt-2'>
          <Button variant="primary" type="submit" className='mb-4'>Inscription</Button>
        </div>
    </Form>
      }
    </Container>
    </Helmet> 
  );
}

export default Signup
