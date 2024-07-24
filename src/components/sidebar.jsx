import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import List from './list'
import Users from './context/users'
import { useContext } from 'react'
import UserForm from './form'


const Sidebar = ({ addUser, selectFriend, isSelected }) => {
    const [isNewUser, setIsNewUser]= useState(false)
    const {friend} = useContext(Users)
    return (
        <div className=' mb-2 shadow rounded p-2 col-lg-5 col-md-5 col-sm-12' >
            <List handleSelectFriend={selectFriend} isSelected={isSelected} />
            {isNewUser && <UserForm addFriend={addUser} /> }
            <Button variant='warning' className='my-3 addFrndBtn m-2' onClick={() => setIsNewUser(!isNewUser)} >{ isNewUser ? "Close" : "Add Friend"}</Button>
        </div>
    )
}

export default Sidebar
