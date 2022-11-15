import { useState, useEffect } from 'react'
import './friendslist.scss'
import axios from 'axios'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalTitle,
} from 'react-bootstrap'

export const FriendsList = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [friendDetails, setFriendDetails] = useState('')
  const [addedFriend, setAddedFriend] = useState('')

  var checkFriend = []

  const addFriend = async (event) => {
    await axios.get('http://localhost:3000/getUsers').then((response) => {
      // console.log(response.data)
      const test1 = response.data
      const filtered_users = test1.filter((test) => test.name === friendDetails)
      const user_list = filtered_users.map((user) => user.name)
      const newUser = document.createElement('div', 'id=created')
      newUser.className = 'friends'
      newUser.innerHTML = user_list
      if (checkFriend.includes(user_list)) {
        alert('already added friend')
      } else {
        document.getElementById('friendnames').appendChild(newUser)
        checkFriend.push(...checkFriend, user_list)
      }
      console.log(checkFriend)

      setShow(false)
    })
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>
            <h3>Add Friend</h3>
          </ModalTitle>
        </ModalHeader>

        <Modal.Body>
          <ul>
            <li>
              <b>Watch Case!</b> Name:{' '}
              <input
                type="text"
                onChange={(event) => {
                  setFriendDetails(event.target.value)
                }}
              />
            </li>
          </ul>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-primary" onClick={addFriend}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
      <div id="friendcontainer">
        <div className="title">
          {/* <a
            data-toggle="collapse"
            href="#friendnames"
            role="button"
            aria-expanded="false"
            aria-controls="friendnames"
          > */}
          <h2>Friends</h2>
          <button onClick={handleShow} className="addfriendbtn">
            {' '}
            +{' '}
          </button>
          {/* </a> */}
        </div>
        <div className="friendnames collapse multi-collapse" id="friendnames">
          {/* {addedFriend && <div className="friends">{addedFriend} </div>} */}
        </div>
      </div>
    </>
  )
}
