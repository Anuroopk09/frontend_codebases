import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Importing an external component
import HelloWorld from './components/HelloWorld'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* The return statement must have only one root HTML element.
    Use a <div> (or <> fragment </>) to wrap multiple elements inside it. */}
      <h1> Hi this is a component</h1>
      {/*
      External components can be used like HTML tags: <ComponentName />
      Place them under src/components/ComponentName.jsx
      Always import the component at the top of the file before using it.
      */}
      <HelloWorld />
    </div>
  )
}

export default App
