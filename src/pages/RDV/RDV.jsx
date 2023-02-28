import React, { useState } from 'react'
import { Button, Container, Form, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { selectProfs } from '../../app/selectors'
import Helmet from '../../components/Helmet/Helmet'
import { saveRDV } from '../../utils/dbMethods'

const RDV = () => {

const [loading, setLoading] = useState(false)
const [clientName, setClientName] = useState('')
const [clientPhone, setClientPhone] = useState('')
const [clientEmail, setClientEmail] = useState('')
const [nbEleves, setNBEleves] = useState('')
const [niveau, setNiveau] = useState('')
const { id } = useParams()
const navigate = useNavigate()
const profsData = useSelector(selectProfs)
const prof = profsData.data.find(prof => {return prof.uid === id})


const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    setLoading(true)
    
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    saveRDV(prof, clientName, clientPhone, clientEmail, nbEleves, niveau, date, navigate, setLoading)
}

return (
    <Helmet title='Rendez-vous'>
    <Container className='pt-2'>
        <h3 className='mt-3 mb-4 fw-bold d-flex justify-content-center'>
            Demande de rendez-vous
        </h3>
        <span className='d-flex justify-content-center'>pour {prof?.username}</span>

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
                onChange={e=>setClientName(e.target.value)}
            />

            <Form.Group className="mb-4" controlId="formBasicTel">
                <Form.Label>Numéro de télephone</Form.Label>
                <Form.Control
                    required
                    type="tel"
                    placeholder="Ex: 77-018888"
                    pattern='[7]{2}-[0-9]{6}'
                    onChange={e=>setClientPhone(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
                required type="email" placeholder="Ex: test@test.com" onChange={e=>setClientEmail(e.target.value)}/>
            </Form.Group>

            <Form.Label>Nombre d'élèves</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="2/3/4"
                className="mb-4" 
                onChange={e=>setNBEleves(e.target.value)}
            />

            <Form.Label>Niveau</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Collège / Lycée"
                className="mb-4" 
                onChange={e=>setNiveau(e.target.value)}
            />

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

export default RDV
