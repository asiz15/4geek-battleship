import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { CpuBoard } from "../components/game/CpuBoard"
import { PlayerBoard } from "../components/game/PlayerBoard"
import { GameDataContext } from "../context/GameContext"

export const Game = () => {
  const {game} = useContext(GameDataContext)
  const navigate = useNavigate()
  useEffect(() => {
    if(game.winner){
      navigate('/game-results')
    }
  },[game])
  return (
    <div className='w-full flex flex-col'>
      <div className="w-full text-center text-2xl">
      Turn: { game.currentPlayer }
      </div>
        <div className="flex w-full">
        <div className="w-6/12 p-10 pt-5">
          <PlayerBoard />
        </div>
        <div className="w-6/12 mx-auto">
          <CpuBoard />
        </div>
        </div>
    </div>
  )
}
