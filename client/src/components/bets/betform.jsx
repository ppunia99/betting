import axios from 'axios'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import './bets.scss'

export const BetForm = ({ show }) => {
  return (
    <>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Bet</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ul className="betformbody">
            <li>
              Your Name: <input type="text" />
            </li>
            <li>
              <label /> Betting With: <input type="text" />
            </li>
            <li>
              <label /> Description: <input type="text" />
            </li>
            <li>
              <label /> Amount Being Bet: <input type="number" />
            </li>
            <li>
              <label /> Alternative Option: <input type="text" />
            </li>
          </ul>
        </Modal.Body>

        <Modal.Footer>
          <h3> Please Make Sure To Fill Out All Sections </h3>
        </Modal.Footer>
      </Modal>
    </>
  )
}
