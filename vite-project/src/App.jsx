import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Button, ProgressBar } from 'react-bootstrap'
import Postcode from './Postcode/Postcode'
import ReactRouter from './Router/ReactRouter'

import React from 'react'

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalTime = setInterval(() => {
      if (counter <= 100) {
        setCounter(counter + 10)
        console.log(counter);
      }
    }, 1000);
    return () => {
      clearInterval(intervalTime);
    }
  }, [counter])

  return (
    <>
      <ReactRouter></ReactRouter>
      {/* <div className='w-100 mt-5'>
        <ProgressBar now={counter} variant='success' />
        <Postcode />
      </div> */}
    </>
  )
}

export default App