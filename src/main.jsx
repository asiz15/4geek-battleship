import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { GameDataProvider } from './context/GameContext'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

ReactDOM.render(
  <React.StrictMode>
    <GameDataProvider>
      <DndProvider backend={HTML5Backend}>
          <App/>
      </DndProvider>
    </GameDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
