import React, { useState } from 'react'
import { Card, Container, ListGroup, Row, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectEnAttente } from '../../app/selectors'
import {
  handleAccepterSigning,
  handleRefuserSigning,
} from '../../utils/dbMethods'

const EnAttente = () => {
  const [loading, setLoading] = useState(false)
  const enAttente = useSelector(selectEnAttente)
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
            Inscription
          </h3>
          <Row className="row gy-4 mt-4">
            {enAttente.data?.map((item) => (
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{item.username}</Card.Title>
                  <Card.Text>{item.bio}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{item.email}</ListGroup.Item>
                  <ListGroup.Item>{item.phone}</ListGroup.Item>
                  <ListGroup.Item>{item.status}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link
                    onClick={() => handleRefuserSigning(item.uid, setLoading)}
                  >
                    Refuser
                  </Card.Link>
                  <Card.Link
                    onClick={() => handleAccepterSigning(item.uid, setLoading)}
                  >
                    Accepter
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

export default EnAttente
