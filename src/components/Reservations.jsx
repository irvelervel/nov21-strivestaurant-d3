// if you need a state, or you need to access any part of the component's lifecycle,
// you need a class component!

// in this component we want to grab all the reservations stored in the DB
// every time you fetch data in a react component, you'll need to store
// the data you grab in your state object

import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Reservations extends Component {
  state = {
    // let's make room for the reservations that are going to be fetched!
    // they are going to come as an array, because they can be many!
    reservations: [], // the initial value here is an empty array because
    // we want to map this array in the interface at all times!
  }

  render() {
    return (
      <div className='mb-3'>
        <h2>BOOKED TABLES:</h2>
        <ListGroup>
          {this.state.reservations.map((reservation) => (
            <ListGroup.Item key={reservation._id}>
              {/* the ._id is a property created by the DB while storing the resource */}
              {/* it's a unique identifier, basically a long unique string */}
              {reservation.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    )
  }
}

export default Reservations
