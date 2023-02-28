import React from 'react'
import { Card, Container, ListGroup, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectNewSigning } from '../../app/selectors'

const Inscription = () => {
  const newSigning = useSelector(selectNewSigning)
  const navigate = useNavigate()

  return (
    <div>
      <span onClick={() => navigate('/dashboard')}>Dashboard</span>
      <Container>
      <h3 className='d-flex justify-content-center fw-bold my-3'>Inscription</h3>
      <Row className="row gy-4 mt-4">
        {
          newSigning.data?.map((item) => (
            <Card key={item.uid} style={{ width: '18rem' }} className='me-3'>
              <Card.Header>{item.username}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>{item.email}</ListGroup.Item>
                <ListGroup.Item>{item.phone}</ListGroup.Item>
                <ListGroup.Item>{item.status}</ListGroup.Item>
              </ListGroup>
            </Card>
          ))
        }
      </Row>
    </Container>
    </div>
  )
}

export default Inscription
