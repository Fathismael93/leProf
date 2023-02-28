import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAttenteSigning, getMessagesAttente, getNewSigning, getRDVAttente } from '../../utils/dbMethods'

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect( () => {
    getNewSigning(dispatch)
    getAttenteSigning(dispatch)
    getRDVAttente(dispatch)
    getMessagesAttente(dispatch)
  }, [])

  return (
    <Container>
        <h3 className='d-flex justify-content-center fw-bold mb-4'>Dashboard</h3>
        <ul >
            <li><a onClick={()=>navigate('/inscriptionAdmin')}>Inscription</a></li>
            <li><a onClick={()=>navigate('/enAttente')}>En Attente</a></li>
            <li><a onClick={()=>navigate('/rdvAdmin')}>RDV</a></li>
            <li><a onClick={()=>navigate('/messageAdmin')}>Messages</a></li>
        </ul>
    </Container>
  )
}

export default Dashboard
