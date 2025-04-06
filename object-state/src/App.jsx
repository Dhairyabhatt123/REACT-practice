import TodoList from './Todo'
import LudoBoard from './LudoBoard'
import Lottery from './Lottery'
import './App.css'
import NewLottery from './NewLottery'
import { sum } from './helper'

function App() {

  let winCondition = (ticket)=>{
    return sum(ticket) ===15;
  }
  return (
    <>
    <NewLottery n={3} winningsum ={winCondition}/>
    </>
  )
}

export default App
