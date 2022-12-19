import React, { useState } from 'react'
import Counter from './Counter'

const LoginPage = () => {
  // Declare a state variable called "username" with an initial value of an empty string
  const [username, setUsername] = useState('')

  // Declare a state variable called "password" with an initial value of an empty string
  const [password, setPassword] = useState('')

  // Declare a state variable called "isLoggedIn" with an initial value of false
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // This function is called when the "Logout" button is clicked
  const logout = () => {
    setIsLoggedIn(false)
  }

  // This function is called when the "Login" button is clicked
  function handleSubmit(event) {
    event.preventDefault()
    if (username.trim().length === 0 || password.trim().length === 0) {
      alert('Please enter your username and password')
      return
    }
    // Validate the login form and set isLoggedIn to true if the login is successful
    if (username === 'admin' && password === 'pass1234') {
      setIsLoggedIn(true)
    } else {
      alert('Please enter correct username and password')
      return
    }
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <Counter />
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              username:
              <input
                type='text'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
            <br />
            <label>
              password:
              <input
                type='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <br />
            <button type='submit'>Login</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default LoginPage
