import { useState } from 'react'
import LoginForm from './loginform'
import { Navbar } from '../navbar/navbar'
import { Bets } from '../bets/bets'
import { Row, Col } from 'react-bootstrap'
import './login.scss'
import { FriendsList } from '../friendslist/friendslist'
import { Profile } from '../profile/profile'
export const Login = () => {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123',
  }

  const [user, setUser] = useState({ name: '', email: '' })
  const [error, setError] = useState('')

  const enter = (details) => {
    if (
      details.email &&
      adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log('logged in')
      setUser({ name: details.name, email: details.email })
    } else {
      console.log('details do not match')
      setError('Details do not match!')
    }
  }

  const logout = () => {
    setUser({ name: '', email: '' })
  }

  return (
    <div>
      {user.email != '' ? (
        <div id="container">
          <div>
            <Navbar />
          </div>
          <Row id="mainpage">
            <Col className="viewfriends col-md-4">
              {' '}
              <FriendsList />{' '}
            </Col>
            <Col className="viewbets col-md-4">
              <Bets />{' '}
            </Col>
            <Col className="viewprofile col-md-4">
              {' '}
              <Profile user={user} />
            </Col>
          </Row>
          <Row className="logout-pos">
            <Col className="logout">
              <button onClick={logout}>Logout</button>
            </Col>
          </Row>
        </div>
      ) : (
        <LoginForm Enter={enter} Error={error} />
      )}
    </div>
  )
}
