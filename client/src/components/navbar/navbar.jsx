import { Row, Col } from 'react-bootstrap'
import './navbar.scss'
import handshake from './../../assets/handshake.png'
import Image from 'react-bootstrap'

export const Navbar = () => {
  return (
    <>
      <Row id="navbar">
        <Col className="title">
          <h1>BetOnIt.</h1>
          <img src={handshake} tintColor="blue" />
        </Col>
      </Row>
    </>
  )
}
