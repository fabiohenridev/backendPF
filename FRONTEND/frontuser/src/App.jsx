import { useState } from 'react'
import './App.css'
import User from './Componentes/User';


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <User/>
   </div>
  )
}

export default App
