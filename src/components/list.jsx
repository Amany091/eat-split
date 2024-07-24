import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import Users from './context/users'
import User from './context/user'

const List = ({ handleSelectFriend , isSelected}) => {
    const { friend } = useContext(Users);
    const {selectedFriend, setSelectedFriend} = useContext(User)
    console.log(isSelected)
    return (
        <div>
            {friend.map(frnd => (
                    <div key={frnd.id} className={`card mb-3 frnd-bill ${selectedFriend.id === frnd.id && isSelected ? "selected" : ""}`}>
                        <div className="row g-0">
                            <div className="col-md-1 d-flex justify-content-center align-items-center">
                                <img src={frnd.image} className="  img-fluid rounded-start" alt={frnd.friendName} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{frnd.friendName}</h5>
                                    <p className="card-text">you Own {frnd.friendName} {frnd.bill} </p>
                                <Button variant='warning' className='btn-sm d-inline' type='button' onClick={() => handleSelectFriend(setSelectedFriend(frnd))} >{ selectedFriend.id === frnd.id && isSelected? "close" : "select"}</Button>
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default List
