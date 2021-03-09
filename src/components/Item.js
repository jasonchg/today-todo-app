import { ListGroup, Container, Row, Col, Form } from 'react-bootstrap'
import { useState } from 'react'

const Item = ({ task: { isCheck, task, time } }) => {
  const [check, setCheck] = useState(isCheck)

  return (
    <ListGroup.Item>
      <Container style={{ paddingTop: 10, paddingBottom: 10 }}>
        <Row>
          <Col sm={1}>
            <Form.Check
              type='checkbox'
              checked={check}
              onChange={() => setCheck(!check)}
            />
          </Col>
          <Col sm={8}>{check ? <strike> {task} </strike> : task}</Col>
          <Col sm={3}>{time}</Col>
        </Row>
      </Container>
    </ListGroup.Item>
  )
}

export default Item
