import React from 'react'
import { Button, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { createImageFromInitials } from '../../utils/colorMethods'

const ProfCard = ({ data }) => {
  const navigate = useNavigate()

  return (
    <Col className="col-lg-3 col-md-4 shadow p-3 mb-5 bg-body rounded">
      <Card border="primary" className="h-100 w-100 py-2">
        <Card.Body>
          <Card.Img
            className="mb-3"
            src={createImageFromInitials(500, data.username)}
          />
          <Card.Title className="mb-5 fw-bold">{data.username}</Card.Title>
          <div className="mt-5 mb-3">
            <h6 className="fw-bold">Niveau(x):</h6>
            {data.college && <span className="fst-italic">Collège </span>}/
            {data.lycee && <span className="fst-italic"> Lycée</span>}
          </div>
          <div className="mb-4">
            <h6 className="fw-bold">Disponible:</h6>
            <span className="fst-italic">{data.available}</span>
          </div>
          <Button
            variant="outline-primary"
            onClick={() => navigate(`/profilProf/${data.uid}`)}
          >
            Consulter
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProfCard
