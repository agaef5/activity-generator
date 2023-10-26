import { useState } from 'react'
import ActivityGenerator from './pages/ActivityGenerator'
import CreateAcc from './components/CreateAcc'
import LogIn from './components/LogIn'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateAcc/>
      <LogIn/>
      <ActivityGenerator/>

    </>
  )
}

export default App
