import React from 'react'
import { Card, Container, ListGroup, Row} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectMessages } from '../../app/selectors'

const Message = () => {
  const messages = useSelector(selectMessages)
  const navigate = useNavigate()

  return (
    <Container>
          <span onClick={() => navigate('/dashboard')}>Dashboard</span>
          <h3 className='d-flex justify-content-center fw-bold my-3'>Messages</h3>
          <Row className="row gy-4 mt-4">
            {
              messages.data?.map((item) => (
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{item.contactName}</Card.Title>
                    <Card.Text>{item.contactMessage}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>{item.contactEmail}</ListGroup.Item>
                    <ListGroup.Item>{item.contactPhone}</ListGroup.Item>
                    <ListGroup.Item>{item.date}</ListGroup.Item>
                    <ListGroup.Item>{item.status}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link>Refuser</Card.Link>
                    <Card.Link>Accepter</Card.Link>
                  </Card.Body>
                </Card>
              ))
            }
          </Row>
        </Container>
  )
}

export default Message
