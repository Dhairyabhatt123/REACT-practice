import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import SearchBox from './SearchBox';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Button variant="contained">click me!</Button> */}
      <SearchBox/>
    </>
  )
}

export default App
