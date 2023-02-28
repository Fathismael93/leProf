import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { Container, Button, Form, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/selectors'
import { saveDataProfile } from '../../utils/dbMethods';
import Helmet from '../../components/Helmet/Helmet';


const EditProfil = () => {
  const user = useSelector(selectUser);

  const navigate = useNavigate()

    const [bio, setBio] = useState('')
    const [college, setCollege] = useState('')
    const [lycee, setLycee] = useState('')
    const [adresse, setAdresse] = useState('')
    const [available, setAvailable] = useState('')
    const [loading, setLoading] = useState(false)

    const addDataToDB = (e) =>{
    e.preventDefault()
    e.stopPropagation()

    saveDataProfile(user, setLoading, navigate, bio, adresse, college, lycee, available)
  }

  return (
    <Helmet title='Editer Profil'>
    <Container className='pt-5'>
    <h3 className="mb-3 d-flex justify-content-center text-primary fw-bold">
      {user && user.displayName}
    </h3>

    {
      loading ? 
      (
        <div className='d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="primary" />
        </div>
      ) : 
      (
          <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <h6>Bio :</h6>
        <Form.Control as="textarea" rows={2} onChange={e=>setBio(e.target.value)}
        placeholder="Décrivez vous en 2/3 lignes..."/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
        <h6>Collège :</h6>
        <Form.Control as="textarea" rows={4} onChange={e=>setCollege(e.target.value)}
        placeholder="Toutes les matières - 20 000 fdj
                      Fr/Math/PC/SVT - 15000 fdj"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
        <h6>Lycée :</h6>
        <Form.Control as="textarea" rows={4} onChange={e=>setLycee(e.target.value)}
        placeholder="Seconde-toutes les matières-30 000fdj
                      Seconde-Math/PC/SVT-20 000 fdj"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
        <h6>Renseignez vos disponibilités :</h6>
        <Form.Control as="textarea" rows={4} onChange={e=>setAvailable(e.target.value)}
        placeholder="Exemple: 4 soirs par semaines"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
        <h6>Adresse :</h6>
        <Form.Control as="textarea" rows={2} onChange={e=>setAdresse(e.target.value)}
        placeholder="Djibouti-ville, Avenue 26, Quartier 5"/>
      </Form.Group>

      <div className='d-flex justify-content-center pt-2'>
        <Button
            onClick={addDataToDB}>
              Envoyer
        </Button>
      </div>
    </Form>
      )
    }
    </Container>
    </Helmet>
  )
}

export default EditProfil
