import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectProfs } from '../../app/selectors'
import Helmet from '../../components/Helmet/Helmet'

const ProfilProf = () => {
  const navigate = useNavigate()

  const { id } = useParams()
  const profsData = useSelector(selectProfs)
  const prof = profsData.data.find((prof) => {
    return prof.uid === id
  })

  return (
    <Helmet title={prof?.username}>
      <Container className="pt-2 shadow p-3 my-5 bg-body rounded">
        <h3 className="mt-3 mb-4 fw-bold d-flex justify-content-center">
          {prof?.username}
        </h3>
        <div className="bg-light border border-primary rounded">
          <h6 className="ms-3 pt-3 text-dark fw-bolder">Bio:</h6>
          <p className="ms-3 text-dark">{prof?.bio}</p>
          <h6 className="ms-3 pt-3 text-dark fw-bolder">Collège:</h6>
          <p className="ms-3 text-dark">{prof?.college}</p>
          <h6 className="ms-3 pt-3 text-dark fw-bolder">Lycée:</h6>
          <p className="ms-3 text-dark">{prof?.lycee}</p>
          <h6 className="ms-3 pt-3 text-dark fw-bolder">Disponibilité:</h6>
          <p className="ms-3 text-dark">{prof?.available}</p>
          <h6 className="ms-3 pt-3 text-dark fw-bolder">Adresse:</h6>
          <p className="ms-3 text-dark">{prof?.adresse}</p>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Button
            variant="outline-primary"
            onClick={() => navigate(`/rdvPage/${prof?.uid}`)}
          >
            Organiser RDV
          </Button>
        </div>
      </Container>
    </Helmet>
  )
}

export default ProfilProf
