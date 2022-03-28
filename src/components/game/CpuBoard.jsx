
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GameDataContext } from "../../context/GameContext"
import { useBoard } from "../../hooks/useBoard"
import { BoardCell } from "../BoardCell"

export const CpuBoard = () => {
    const { cpu, player, game } = useContext(GameDataContext)
    const [showShips, setShowShips] = useState(false)

    const fireInCell = async (rowIndex, cellIndex) => {
        if(game.currentPlayer === 'cpu' && !player.board[rowIndex][cellIndex].hasShot){
            const updatedPlayerBoard = [...player.board]
            updatedPlayerBoard[rowIndex][cellIndex] = {...updatedPlayerBoard[rowIndex][cellIndex], hasShot: true}
            await player.setBoard(updatedPlayerBoard)
        }
    }

    const getAvailablesPlayerCoordinates = () => {
        const availablesCoordinates = []
        player.board.forEach((row,rowIndex) => {
            return row.forEach((cell, cellIndex) => {
                if(!cell.hasShot){
                    availablesCoordinates.push([rowIndex, cellIndex])
                }
            })
        });
        return availablesCoordinates
    }

    const handleShowShips = () => {
        setShowShips(!showShips)
    }
    const simulateCpuTurn = () => {
        
        const coordinates = getAvailablesPlayerCoordinates()
        const randomPickedCellIndex = randomIntFromInterval(0, coordinates.length - 1)

        fireInCell(coordinates[randomPickedCellIndex][0],coordinates[randomPickedCellIndex][1])
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

     useEffect(() => {
         if(game.stage === 'main-game' && game.currentPlayer === 'cpu' && !game.winner ){
            simulateCpuTurn()
            game.commitTurn('cpu')
         }
     }, [game]) 

    return (
        <div className="w-full py-10">
            <div className="flex flex-col w-full mb-4">
                <div className="w-full pt-6">
                    <h4>CPU board</h4>
                </div>
                <div className="flex">
                <span className="text-xl mr-3">Health: { cpu.health }</span>
                <button className="bg-green-400 text-white p-2 text-xs" onClick={handleShowShips}>{ showShips ? 'Hide cpu ships' : 'Show cpu ships' }</button>
                </div>
            </div>
            <div className="w-full ">
                {cpu && cpu.board.map((boardRow, rowIndex) => {
                    return (
                        <div key={`row-${rowIndex}`} className="flex">
                            <div className="grid grid-cols-9 w-full">
                                {boardRow && boardRow.map((boardCell, cellIndex) => {
                                    return (
                                        <BoardCell key={`${rowIndex}-${cellIndex}`} bgColor="bg-blue-200" showShips={showShips} height={20} rowIndex={rowIndex} cellIndex={cellIndex} cellInfo={boardCell} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
