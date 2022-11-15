import './profile.scss'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

export const Profile = ({ user }) => {
  const [scores, setScores] = useState({ wins: 20, losses: 15 })
  const [ratio, setRatio] = useState(scores.wins / scores.losses)

  return (
    <>
      <Row id="profilecontainer">
        <div className="welcome-pos">
          <Col className="welcome">
            <div>
              <div>
                Welcome
                <span> {user.name}</span>
              </div>
            </div>
          </Col>
        </div>
        <Col className="totals">
          <div className="wins"> Wins: {scores.wins}</div>
          <div className="losses"> Losses: {scores.losses}</div>
        </Col>
        <Col className="ratio">W/L Ratio: {ratio.toFixed(2)}</Col>
        <button className="btn btn-primary">Transfer Balance</button>
      </Row>
    </>
  )
}
