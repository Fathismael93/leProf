import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Button, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/selectors'
import { getUserDocument } from '../../utils/dbMethods'
import Helmet from '../../components/Helmet/Helmet'

const Profil = () => {
  const user = useSelector(selectUser)

  const navigate = useNavigate()

  const [bio, setBio] = useState('')
  const [college, setCollege] = useState('')
  const [lycee, setLycee] = useState('')
  const [adresse, setAdresse] = useState('')
  const [available, setAvailable] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUserDocument(
      user,
      setBio,
      setCollege,
      setLycee,
      setAdresse,
      setAvailable,
      setLoading
    )
  }, [user])

  const editProfilPage = () => {
    navigate('/editProfil')
  }

  return (
    <Helmet title={user?.displayName}>
      <Container className="pt-2 shadow p-3 my-5 bg-body rounded">
        <h3 className="mt-3 mb-4 text-primary fw-bold d-flex justify-content-center">
          {user?.displayName}
        </h3>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <div className="bg-light border border-primary rounded">
            <h6 className="ms-3 pt-3 text-dark fw-bolder">Bio:</h6>
            <p className="ms-3 text-dark">{bio}</p>
            <h6 className="ms-3 pt-3 text-dark fw-bolder">Collège:</h6>
            <p className="ms-3 text-dark">{college}</p>
            <h6 className="ms-3 pt-3 text-dark fw-bolder">Lycée:</h6>
            <p className="ms-3 text-dark">{lycee}</p>
            <h6 className="ms-3 pt-3 text-dark fw-bolder">Disponibilité:</h6>
            <p className="ms-3 text-dark">{available}</p>
            <h6 className="ms-3 pt-3 text-dark fw-bolder">Adresse:</h6>
            <p className="ms-3 text-dark">{adresse}</p>
          </div>
        )}
        <div className="d-flex justify-content-center mt-3">
          <Button variant="outline-primary" onClick={editProfilPage}>
            Editer Profil
          </Button>
        </div>
      </Container>
    </Helmet>
  )
}

export default Profil
