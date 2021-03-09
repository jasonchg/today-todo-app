import { Navbar, Modal, Button, Form, Col } from 'react-bootstrap'
import Plus from '../assets/plus.png'
import { useState } from 'react'
import date from 'date-and-time'

const Header = ({ addTask }) => {
  const [task, setTask] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [day, setDay] = useState('AM')
  const [show, setShow] = useState(false)

  const now = new Date()

  const saveTask = (e) => {
    e.preventDefault()
    const time = `${hour}:${minute} ${day}`
    addTask(task, time)
    setShow(false)
  }

  return (
    <Navbar
      bg='light'
      variant='light'
      sticky='top'
      style={{
        padding: 20,
      }}
    >
      <Navbar.Brand href='/'>
        <h1
          style={{
            color: '#CBC3E3',
          }}
        >
          {date.format(now, 'dddd')}, {date.format(now, 'DD')}
        </h1>
        <b> {date.format(now, 'MMMM')}</b>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>
          <img
            onClick={() => setShow(true)}
            src={Plus}
            alt='plus'
            style={{
              width: 50,
              background: '#CBC3E3',
              borderRadius: '50%',
              right: 20,
              position: 'absolute',
              cursor: 'pointer',
            }}
          />
        </Navbar.Text>
      </Navbar.Collapse>

      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={saveTask}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Task</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter task'
                required
                onChange={(e) => setTask(e.target.value)}
              />
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Hour</Form.Label>
                  <Form.Control
                    type='number'
                    min={1}
                    max={12}
                    required
                    onChange={(e) => setHour(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Minute</Form.Label>
                  <Form.Control
                    type='number'
                    min={0}
                    max={60}
                    required
                    onChange={(e) => setMinute(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Day</Form.Label>
                  <Form.Control
                    as='select'
                    onChange={(e) => setDay(e.target.value)}
                    defaultValue={'AM'}
                  >
                    <option value='AM'>AM</option>
                    <option value='PM'>PM</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant='primary' type='submit'>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Navbar>
  )
}

export default Header
