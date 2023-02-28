import React, { useState } from 'react'
import { Card, Container, ListGroup, Row, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectRDV } from '../../app/selectors'
import { handleAccepterRDV, handleRefuserRDV } from '../../utils/dbMethods'

const AdminRDV = () => {
  const [loading, setLoading] = useState(false)
  const rdv = useSelector(selectRDV)
  const navigate = useNavigate()

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Container>
          <span onClick={() => navigate('/dashboard')}>Dashboard</span>
          <h3 className="d-flex justify-content-center fw-bold my-3">
            RDV en ATTENTE
          </h3>
          <Row className="row gy-4 mt-4">
            {rdv.data?.map((item) => (
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{item.clientName}</Card.Title>
                  <Card.Text>{item.clientPhone}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{item.clientEmail}</ListGroup.Item>
                  <ListGroup.Item>{item.date}</ListGroup.Item>
                  <ListGroup.Item>{item.nbEleves}</ListGroup.Item>
                  <ListGroup.Item>{item.niveau}</ListGroup.Item>
                  <ListGroup.Item>{item.profName}</ListGroup.Item>
                  <ListGroup.Item>{item.profEmail}</ListGroup.Item>
                  <ListGroup.Item>{item.profNumber}</ListGroup.Item>
                  <ListGroup.Item>{item.status}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link
                    onClick={() => handleRefuserRDV(item.profID, setLoading)}
                  >
                    Annuler
                  </Card.Link>
                  <Card.Link
                    onClick={() => handleAccepterRDV(item.profID, setLoading)}
                  >
                    Traiter
                  </Card.Link>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      )}
    </div>
  )
}

export default AdminRDV
