import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameDataContext } from '../context/GameContext'

export const GameResults = () => {
   const { game, player, cpu } = useContext(GameDataContext)
   const navigate = useNavigate()
   
   const playAgain = async() => {
       await player.resetBoard()
       await cpu.resetBoard()
       await game.reset()
       navigate('/order-ships')
   }
  return (
    <div className='w-full flex justify-center items-center' style={{height: '80vh'}}>
        <div className="w-2/6 bg-blue-400 mx-auto p-4 text-white">
            <h2 className="text-2xl font-bold mb-4">Game Results</h2>
            <h3 className="text-xl">Winner: <span className="font-bold">{ game.winner }</span></h3>
            <h3 className="text-xl">Left health: <span>{ game.winner === 'player' ? player.health : cpu.health }</span></h3>
            <button onClick={playAgain} className="text-white text-sm bg-green-400 p-2 mt-10 float-right">Play again</button>
        </div>
        <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  )
}
