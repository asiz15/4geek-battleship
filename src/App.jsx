import { useState } from 'react'
import { Game } from './pages/Game'
import { Home } from './pages/Home'
import { OrderShips } from './pages/OrderShips'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { GameResults } from './pages/GameResults'

function App() {

  return (
    <div className="App p-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/order-ships" element={<OrderShips/>}></Route>
          <Route path="/game" element={<Game/>}></Route>
          <Route path="/main-game" element={<Game/>}></Route>
          <Route path="/game-results" element={<GameResults/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
