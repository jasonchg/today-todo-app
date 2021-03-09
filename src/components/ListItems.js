import { ListGroup } from 'react-bootstrap'
import Item from './Item'

const ListItems = ({ data }) => {
  return (
    <div>
      <ListGroup>
        {data.map((task) => (
          <Item task={task} key={task.id} />
        ))}
      </ListGroup>
    </div>
  )
}

export default ListItems
