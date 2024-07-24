import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Users from './context/users'
import User from './context/user'


const FormBill = () => {
    const { selectedFriend } = useContext(User)
    const [data, setData] = useState({
        bill: "",
        myExpense: "",
        frndExpense: "",
        seller:""
    })
    console.log(data)
    return (
        <div className="form-bill col-lg-5 col-md-5 col-sm-12 shadow ">
            <h4 className='my-2'> Split A Bill With {selectedFriend.friendName} </h4>
            <Form>
                <Form.Group as={Row} className='my-2' controlId="formBasicEmail">
                    <Form.Label column sm="2" >💰 Bill Value</Form.Label>
                    <Col sm="10">
                        <Form.Control type="number" onChange={(e)=>setData({...data, bill:e.target.value})} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='my-2' controlId="formBasicEmail">
                    <Form.Label column sm="2" >🧍‍♀️ Your Expense</Form.Label>
                    <Col sm="10">
                        <Form.Control type="number" onChange={(e)=>setData({...data, myExpense:e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='my-2' controlId="formBasicEmail">
                    <Form.Label column sm="2" >👨🏾‍🤝‍👨🏾 {selectedFriend.friendName} Expense</Form.Label>
                    <Col sm="10">
                        <Form.Control type="number" disabled readOnly defaultValue={data.bill} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='my-2' controlId="formBasicEmail">
                    <Form.Label column sm="2" >🤑 Who is paying the bill ? </Form.Label>
                    <Col sm="10">
                        <Form.Select aria-label='friend-list' onChange={(e)=>setData({...data,seller:e.target.value})} >
                            <option>Choose...</option>
                            <option value='you'>You</option>
                            <option value={selectedFriend.friendName}>{selectedFriend.friendName}</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
            </Form>

        </div>
    )
}

export default FormBill
