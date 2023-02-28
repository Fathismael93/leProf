import React, { useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectProfs } from '../../app/selectors'
import ProfCard from '../ProfCard/ProfCard'

const Searching = (props) => {
  const { isSearching, setIsSearching } = props
  const [searchTerm, setSearchTerm] = useState('')
  const data = useSelector(selectProfs)

  const searchingStarted = (data) => {
    data.filter((val) => {
      if (searchTerm === '') {
        setIsSearching(false)
        return val
      } else if (val.username.toLowerCase() === searchTerm.toLowerCase()) {
        return val
      }
    })
  }

  return (
    <Container>
      <Form className="d-flex">
        <Form.Control
          id="searchInput"
          type="search"
          placeholder="Recherche..."
          onChange={(event) => {
            setSearchTerm(event.target.value)
            setIsSearching(true)
          }}
        />
      </Form>
      <div className="template_Container">
        {searchingStarted(data.data).map((val) => {
          return (
            <Row className="row gy-4 mt-4">
              {val?.map((item) => (
                <ProfCard data={item} />
              ))}
            </Row>
          )
        })}
      </div>
    </Container>
  )
}

export default Searching
