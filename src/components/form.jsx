
import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const UserForm = ({addFriend}) => {
    const [friend, setFriend] = useState({
        id: Math.floor(Math.random() * 1000),
        friendName: "",
        image: ""
    })
    console.log(friend)
  return (
    <div className='w-100 add-friend py-2 px-1 ' >
          <Form>
              <Form.Group as={Row} className='my-2' controlId="formHorizontalUser">
                  <Form.Label column sm="2" className='text-sm' > 👩🏾‍🤝‍🧑🏽 Friend Name </Form.Label>
                  <Col sm="10" >
                      <Form.Control type="text" onChange={(e)=> setFriend({...friend,friendName: e.target.value})} />
                  </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalImage">
                  <Form.Label column sm="2" > 👩 Image URL </Form.Label>
                  <Col sm="10" >
                      <Form.Control type="text" defaultValue="https://i.pravatar.cc/48" onChange={(e)=>setFriend({...friend, image:e.target.value})} />
                  </Col>
              </Form.Group>
              <Button variant='warning'className='w-25 my-2 d-block m-auto' onClick={()=> addFriend(friend)} >Add </Button>
      </Form>
    </div>
  )
}

export default UserForm
