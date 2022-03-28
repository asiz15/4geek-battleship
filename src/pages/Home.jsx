import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../4geeks-logo.png'
import { GameDataContext } from '../context/GameContext'

export const Home = () => {
  const navigate = useNavigate()
  const { game } = useContext(GameDataContext)
  const startGame = () => {
    game.setGameStage('picking-ships')
    navigate('/order-ships')
  }
  return (
    <div className="w-full flex justify-center items-center pt-20">
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="flex flex-col items-center w-2/6">
          <img src={logo} width={250} alt="" srcset="" />
          <h1 className="text-5xl font-bold mt-7">4Geeks Battleship</h1>
          <button onClick={startGame} className="text-white bg-blue-400 p-2 text-xl w-2/6 mt-10">Start</button>
      </div>
    </div>
  )
}
