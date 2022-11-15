import './bets.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BetForm } from './betform'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalTitle,
} from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

export const Bets = () => {
  const [betCounter, setBetCounter] = useState(1)
  const [key, setKey] = useState('ongoing')

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [showBet, setShowBet] = useState(false)
  const handleShowBet = () => setShowBet(true)
  const handleCloseBet = () => setShowBet(false)

  const [betPosterName, setBetPosterName] = useState('prith')

  const [listOfBets, setListOfBets] = useState([])
  const [betDetails, setBetDetails] = useState({
    name: '',
    otheruser: '',
    description: '',
    amount: '',
    alternative: '',
  })

  // const [name, setName] = useState('')
  // const [otherUser, setOtherUser] = useState('')
  // const [description, setDescription] = useState('')
  // const [amount, setAmount] = useState(0)
  // const [alternative, setAlternative] = useState('')

  const newBetHandler = () => {
    axios
      .post('http://localhost:3000/betsInput', {
        name: betDetails.name,
        otheruser: betDetails.otheruser,
        description: betDetails.description,
        amount: betDetails.amount,
        alternative: betDetails.alternative,
        status: 'ongoing',
        result: 'NA',
      })
      .then((response) => {
        alert('submitted succesfully')
        setListOfBets([
          ...listOfBets,
          {
            Name: betDetails.name,
            otheruser: betDetails.otheruser,
            description: betDetails.description,
            amount: betDetails.amount,
            alternativse: betDetails.alternative,
          },
        ])
      })

    console.log(betDetails.name)
    setShow(false)
  }

  useEffect(() => {
    axios.get('http://localhost:3000/getBets').then((response) => {
      const res = response.data
      setListOfBets(res)
      const resName = res.filter((name) => name.name === betPosterName)
      var bet_result_list = resName.map((user) => user.result)
      var bet_status_list = resName.map((user) => user.status)
      console.log(bet_status_list)
      // const betResult = resName[0].result
      // const betStatus = resName[0].status
    }, [])
  })

  // const addFriend = async (event) => {
  //   await axios.get('http://localhost:3000/getUsers').then((response) => {
  //     // console.log(response.data)
  //     const test1 = response.data
  //     const filtered_users = test1.filter((test) => test.name === friendDetails)
  //   })
  // }

  return (
    <>
      <Modal
        show={showBet}
        onHide={handleCloseBet}
        animation={true}
        id="betoverview"
        centered={true}
        keyboard={true}
      >
        <Modal.Header>
          <Modal.Title>All your bets</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {listOfBets.map((bet) => {
            return (
              <div
                className="box"
                onClick={handleShowBet}
                id={betCounter.toString()}
              >
                <Row>
                  <Col>
                    <text>Created By: {bet.name}</text>
                    <text>Betting With: {bet.otheruser}</text>
                  </Col>
                  <Col>
                    <text>Amount: {bet.amount}</text>
                  </Col>
                </Row>
                <div className="description">
                  <p>Description: {bet.description}</p>
                  <p> Alternative: {bet.alternative}</p>
                </div>
                <div className="winlossbtn">
                  <button className="btn btn-success">Win</button>
                  <button className="btn btn-danger">Lose</button>
                </div>
              </div>
            )
          })}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleCloseBet}>Close</button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        id="myModal"
        centered={true}
        keyboard={true}
      >
        <ModalHeader closeButton>
          <ModalTitle>Create New Bet</ModalTitle>
        </ModalHeader>

        <ModalBody className="betformbody">
          <ul>
            <li>
              Your Name:{' '}
              <input
                type="text"
                onChange={(event) => {
                  setBetDetails({ ...betDetails, name: event.target.value })
                }}
              />
            </li>
            <li>
              <label /> Betting With:{' '}
              <input
                type="text"
                onChange={(event) => {
                  setBetDetails({
                    ...betDetails,
                    otheruser: event.target.value,
                  })
                }}
              />
            </li>
            <li>
              <label /> Description:{' '}
              <input
                type="text"
                onChange={(event) => {
                  setBetDetails({
                    ...betDetails,
                    description: event.target.value,
                  })
                }}
              />
            </li>
            <li>
              <label /> Amount Being Bet:{' '}
              <input
                type="number"
                onChange={(event) => {
                  setBetDetails({ ...betDetails, amount: event.target.value })
                }}
              />
            </li>
            <li>
              <label /> Alternative Option:{' '}
              <input
                type="text"
                onChange={(event) => {
                  setBetDetails({
                    ...betDetails,
                    alternative: event.target.value,
                  })
                }}
              />
            </li>
          </ul>
        </ModalBody>

        <ModalFooter>
          <button className="btn btn-primary" onClick={newBetHandler}>
            Submit
          </button>
        </ModalFooter>
      </Modal>
      <div id="betcontainer">
        <div id="buttonarea">
          <button onClick={() => setKey('ongoing')}>Ongoing</button>
          <button onClick={() => setKey('completed')}>Completed</button>
        </div>
        <div id="betcontent">
          {key === 'ongoing' && (
            <div id="ongoingBets">
              {listOfBets.map((bet) => {
                return (
                  <div className="box" onClick={handleShowBet}>
                    {bet.name}
                  </div>
                )
              })}
            </div>
          )}
          {key === 'completed' && <div id="completedBets">COMPLETED</div>}
        </div>
      </div>

      <div className="bottomhalf">
        <div>
          <button onClick={handleShow} className="betbtn">
            New Bet
          </button>
        </div>
      </div>
    </>
  )
}
