import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBoard } from "../hooks/useBoard";
import { useShips } from "../hooks/useShips";

export const GameDataContext = createContext()

export const GameDataProvider = ({children}) =>{
    // const navigate = useNavigate()
    const {ships: playerShips, resetShipPicker: resetPlayerShipPicker, resetShipPickers:resetPlayerShipsPickers} = useShips()
    const [game, setGame] = useState({
        isInit: false,
        stage: 'picking-ships',
        currentPlayer: null,
        winner: null
    })


    const {board:playerBoard, setBoard: setPlayerBoard, getUnavailablesCells: getPlayerUnavailableCells, resetBoard: resetPlayerBoard} = useBoard()
    const { board: cpuBoard, setBoard: setCpuBoard, getUnavailablesCells: getCpuUnavailableCells, resetBoard: resetCpuBoard } = useBoard()

    const resetPlayerShip = (shipId) => {
        resetPlayerShipPicker(shipId)
    }

    const resetPlayerShips = () => {
        resetPlayerShipsPickers()
    }
    
    const getPlayerPointsOfHealth = () => {
        return getPlayerUnavailableCells().filter(cell => !cell.isAvailableToDrop && cell?.shipInfo?.id && !cell.hasShot).length
    }

    const getPlayer = () => {
        return {
            ships: playerShips,
            resetPlayerShip,
            resetPlayerShips,
            board: playerBoard,
            setBoard: setPlayerBoard,
            health: getPlayerPointsOfHealth(),
            resetBoard: resetPlayerBoard
        }
    }

    const getCpuPointsOfHealth = () => {
        return getCpuUnavailableCells().filter(cell => !cell.isAvailableToDrop && cell?.shipInfo?.id && !cell.hasShot).length
    }
    const getCpu = () => {
        return {
            board: cpuBoard,
            setBoard: setCpuBoard,
            health: getCpuPointsOfHealth(),
            resetBoard: resetCpuBoard

        }
    }

    const setGameStage = (stage) => {
        setGame(prevState => {
            return {
                ...prevState,
                isInit: true,
                stage: stage,
                currentPlayer: 'player'
            }
        })
    }

    const resetGame = () => {
        setGame(prevState => {
            return {
                ...prevState,
                isInit: true,
                stage: 'picking-ships',
                currentPlayer: null,
                winner: null
            }
        })
    }

    const setGameWinner = (winner) => {
        setGame(prevState => {
            return {
                ...prevState,
                isInit: false,
                stage: 'finished',
                currentPlayer: 'player',
                winner: winner
            }
        })
        // navigate('/game-results')
    }
    const commitTurn = (player) => {
        if(getPlayer().health === 0){
            setGameWinner('cpu')
        }if(getCpu().health === 0){
            setGameWinner('player')
        }
        if(player === 'player'){
            setGame(prevState => {
                return {
                    ...prevState,
                    isInit: true,
                    currentPlayer: 'cpu'
                }
            })
        }
        if(player === 'cpu'){
            setGame(prevState => {
                return {
                    ...prevState,
                    isInit: true,
                    currentPlayer: 'player'
                }
            })
        }
    }

    const getGame = () => {
        return {
            ...game,
            setGameStage,
            commitTurn,
            reset: resetGame
        }
    }
    

    

    return (
        <GameDataContext.Provider value={{
            game: getGame(),
            player: getPlayer(),
            cpu: getCpu()
        }}>
            {children}
        </GameDataContext.Provider>
    )
} 