import { useState } from 'react'
import Base from './components/Pages/Base'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Base/>
    </>
  )
}

export default App
