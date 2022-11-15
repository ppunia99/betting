import { useState } from 'react'
import axios from 'axios'

function LoginForm({ Enter, Error }) {
  const [details, setDetails] = useState({ name: '', email: '', password: '' })

  const submitHandler = () => {
    axios
      .post('http://localhost:3000/usersInput', {
        name: details.name,
        email: details.email,
        password: details.password,
        balance: 0,
      })
      .then((response) => {
        console.log(response.data)
      })

    Enter(details)
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {Error != '' ? <div className="error">{Error}</div> : ''}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(event) => {
              setDetails({ ...details, name: event.target.value })
            }}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(event) => {
              setDetails({ ...details, email: event.target.value })
            }}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(event) => {
              setDetails({ ...details, password: event.target.value })
            }}
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" onClick={submitHandler} />
      </div>
    </form>
  )
}

export default LoginForm
