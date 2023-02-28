import React from 'react'
import { Container } from 'react-bootstrap'
import Helmet from '../../components/Helmet/Helmet'

const Mission = () => {
  return (
    <Helmet title='Notre mission'>
      <Container className='pt-5'>
        <h3 className='d-flex justify-content-center fw-bold mb-5'>Notre mission</h3>
        <h6 className='fw-bold'>POURQUOI ?</h6> <br />
        <p>
          L'éducation est un puissant facteur de développement et de liberté. Au délà de permettre à l'enfant
          de se construire librement un avenir, l'éducation constitue le socle du développement durable, social,
          économique et moral. Beaucoup de parents essaient de donner une éducation de qualité à leurs enfants
          en les inscrivant dans des écoles privées ou en embauchant un prof de cours de soutien pour améliorer
          leurs lacunes.
        </p>
        <p>
          C'est pour cela que depuis quelques années, la demande de prof à la maison est quelque chose qui est
          sur toutes les lèvres de la majorité des parents djiboutiens. <span className='fw-bold'>C'est pourquoi
           nous avons créé cette plateforme.</span>
        </p> <br /> <br />

        <h6 className='fw-bold'>COMMENT ?</h6> <br />
        <p>
          Notre mission est de mettre en relation des personnes désireuses d'enseigner et qui ont le temps, 
          la motivation et l'énergie nécessaire pour ça avec les parents qui cherchent un professeur à la 
          maison pour leurs petits protégés.
        </p>
        <p>
          Les professeurs qui sont sur cette plateforme ont été récruté de manière à ce qu'ils répondent
          à ce besoin cher aux parents. Ces sont des personnes qui sont toujours à l'université, qui ont 
          récemment quittées l'université ou qui ont un don particulier pour certaines matières. Ils savent 
          l'importance de la mission dans laquelle ils s'engagent.
        </p>
    </Container>
    </Helmet>
  )
}

export default Mission
