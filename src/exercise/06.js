// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  //Extra credit 2
  // const [error, setError] = React.useState(null);

  //Extra credit 3
  const [username, setUsername] = React.useState('')

  //Extra credit 1
  const inputRef = React.useRef();

  //Exercise
  const handleSubmit = (event) => {
    event.preventDefault();
    // const { value } = event.target.elements.username;
    onSubmitUsername(username);
  }

  //Extra credit 1
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const { value } = inputRef.current;
  //   onSubmitUsername(value);
  // }

  //Extra credit 2
  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   const isValid = value === value.toLowerCase()

  //   setError(isValid ? null : 'Username must be lower case');
  // }

  //Extra credit 3
  const handleChange = (event) => {
    const { value } = event.target;
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={inputRef} onChange={handleChange} value={username} />
      </div>
      {/* { error && <div style={{ color: 'red' }}>{error}</div>} */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
