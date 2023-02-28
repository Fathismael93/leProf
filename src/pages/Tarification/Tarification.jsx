import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Helmet from '../../components/Helmet/Helmet'

const Tarification = () => {
  console.log(2)
  const navigate = useNavigate()

  return (
    <Helmet title="Tarification">
      <Container className="pt-5">
        <h3
          className="d-flex justify-content-center fw-bold mb-5"
          onClick={() => navigate('/adminConnect')}
        >
          Tarification
        </h3>

        <div className="my-5">
          <p>
            Pour l'organisation d'une entrevue avec un prof:{' '}
            <span className="fw-bold"> 500 fdj</span>
          </p>
          <p>
            Si vous avez choisi un prof, vous payerez juste la première fois
            selon le nombre de matières que vous avez convenu avec le professeur{' '}
            <br />
            <br />
            <br />
            Lycéé: <span className="fw-bold">1500 fdj/matière</span>
            <br />
            <br />
            Collège: <span className="fw-bold">1000 fdj/matière</span>
          </p>
          <p>Merci de votre compréhension</p>
        </div>
      </Container>
    </Helmet>
  )
}

export default Tarification
