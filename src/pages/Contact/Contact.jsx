import React, { useState } from 'react'
import { Button, Container, Form, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Helmet from '../../components/Helmet/Helmet'
import { saveMessage } from '../../utils/dbMethods'

const Contact = () => {

    const navigate = useNavigate()

    const [ contactName, setContactName ] = useState('')
    const [ contactPhone, setContactPhone ] = useState('')
    const [ contactEmail, setContactEmail ] = useState('')
    const [ contactMessage, setContactMessage ] = useState('')
    const [ loading, setLoading ] = useState(false)

    const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    setLoading(true)
    
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    saveMessage(contactName, contactEmail, contactPhone, contactMessage, date, navigate, setLoading)
}

  return (
    <Helmet title='Contactez-nous'>
    <Container className='pt-5'>
        <h3 className='d-flex justify-content-center fw-bold mb-5'>Formulaire de contact</h3>
        
        {
            loading ?
                (
                <div className='d-flex justify-content-center align-items-center'>
                    <Spinner animation="border" variant="primary" />
                </div>
                )  
                :
                
                <Form onSubmit={handleSubmit}>
            <Form.Label>Nom complet</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Ex: Houssein Hassan Houmed"
                className="mb-4" 
                onChange={e=>setContactName(e.target.value)}
            />

            <Form.Group className="mb-4" controlId="formBasicTel">
                <Form.Label>Numéro de télephone</Form.Label>
                <Form.Control
                    required
                    type="tel"
                    placeholder="Ex: 77-018888"
                    pattern='[7]{2}-[0-9]{6}'
                    onChange={e=>setContactPhone(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
                required type="email" placeholder="Ex: test@test.com" onChange={e=>setContactEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} onChange={e=>setContactMessage(e.target.value)}
                placeholder="Ecrivez votre Message..."/>
      </Form.Group>

            <div className='d-flex justify-content-center pt-2'>
                <Button
                    variant="primary"
                    type="submit"
                    className='mb-4'>
                    Envoyer
                </Button>
            </div>
        </Form>
        }
    </Container>
    </Helmet>
  )
}

export default Contact
