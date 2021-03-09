import { useState } from 'react'
import Header from './components/Header'
import { Container, Row, Col } from 'react-bootstrap'
import ListItems from './components/ListItems'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [data, setData] = useState([
    {
      id: uuidv4(),
      isCheck: false,
      task: 'Lunch with girl friend',
      time: '8:00PM',
    },
    {
      id: uuidv4(),
      isCheck: false,
      task: 'Go shopping with girl friend',
      time: '7:00PM',
    },
    {
      id: uuidv4(),
      isCheck: true,
      task: 'Go pick girl friend',
      time: '6:00PM',
    },
  ])

  const addTask = (myTask, time) => {
    const task = {
      id: uuidv4(),
      isCheck: false,
      task: myTask,
      time,
    }
    setData([task, ...data])
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Header addTask={addTask} />
          {data ? <ListItems data={data} /> : 'Loading...'}
        </Col>
      </Row>
    </Container>
  )
}

export default App
