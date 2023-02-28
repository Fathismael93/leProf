import React from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectProfs } from '../../app/selectors'
import {
  FETCHING_STATUS,
  REJECTED_STATUS,
  RESOLVED_STATUS,
} from '../../utils/constants'
import Loading from '../Loading/Loading'
import ProfCard from '../ProfCard/ProfCard'
import CardSkeleton from '../CardSkeleton/CardSkeleton'

const ProfList = () => {
  const profsData = useSelector(selectProfs)
  console.log(profsData.data)

  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  switch (profsData.status) {
    case FETCHING_STATUS:
      return (
        <Row className="row gy-4 mt-4">
          {number.map((index) => (
            <CardSkeleton key={index} number={10} />
          ))}
        </Row>
      )
      break
    case RESOLVED_STATUS:
      return (
        <Row className="row gy-4 mt-4">
          {profsData.data?.map((item) => (
            <ProfCard data={item} key={item.uid} />
          ))}
        </Row>
      )
      break
    case REJECTED_STATUS:
      return (
        <div className="d-flex justify-content-center align-items-center">
          <h1>{profsData.error}</h1>
        </div>
      )
      break

    default:
      return <Loading />
      break
  }
}

export default ProfList
