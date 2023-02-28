import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Helmet from '../../components/Helmet/Helmet'
import ProfList from '../../components/ProfList/ProfList'
import { fetching } from '../../features/profsSlice'
import { getAllProfs } from '../../utils/dbMethods'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetching())
    getAllProfs(dispatch)
  }, [dispatch])

  return (
    <Helmet title="Accueil">
      <Container>
        <ProfList />
      </Container>
    </Helmet>
  )
}

export default Home
