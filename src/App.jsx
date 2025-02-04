import { useState, useEffect } from 'react'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

import './App.css'
import One from './components/One'

function App() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
    }, 8000)
  }, []);
  return (
    <>
    <div className="ABC">

      {
        load ? (
          <ClimbingBoxLoader
            size={30}
            color={'Black'}
          />
        ) : (
          <One />
        )}

    </div>

    </>
  )
}

export default App
