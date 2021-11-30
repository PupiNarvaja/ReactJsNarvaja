import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'  //No me lo importó automaticamente, lo hice manualmente.

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header" id="header">
        <NavBar />
        <div className="reactive--container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <code>This</code> site is running perfectly :D
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
