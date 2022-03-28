
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GameDataContext } from "../../context/GameContext"
import { useBoard } from "../../hooks/useBoard"
import { BoardCell } from "../BoardCell"

export const PlayerBoard = () => {
    const { player, cpu, game } = useContext(GameDataContext)
    const [showShips, setShowShips] = useState(false)
    const fireInCell = async (rowIndex, cellIndex) => {
        if(game.currentPlayer === 'player' && !cpu.board[rowIndex][cellIndex].hasShot){
            const updatedCpuBoard = [...cpu.board]
            updatedCpuBoard[rowIndex][cellIndex] = {...updatedCpuBoard[rowIndex][cellIndex], hasShot: true}
            await cpu.setBoard(updatedCpuBoard)
            await game.commitTurn('player')
        }
    }

    // const getBoardAsCells = () => {
    //     let boardAsCells = []
    //     player.forEach(row => {
    //         return row.forEach(cell => {
    //             boardAsCells.push(cell)
    //         });
    //     });

    //     return boardAsCells
    // }
    // const pointsOfHealth = () => {

    // }

    const handleShowShips = () => {
        setShowShips(!showShips)
    }
    return (
        <div className="w-full py-10">
            <div className="flex flex-col w-full mb-5">
                <div className="w-full">
                    <h4>Player board</h4>
                </div>
                <div className="flex">
                <span className="text-xl mr-3">Health: { player.health }</span>
                <button className="bg-green-400 text-white p-2 text-xs" onClick={handleShowShips}>{ showShips ? 'Hide your ships' : 'Show your ships' }</button>
                </div>
            </div>
            <div className="w-full ">
                {player.board && player.board.map((boardRow, rowIndex) => {
                    return (
                        <div key={`row-${rowIndex}`} className="flex">
                            <div className="grid grid-cols-9 w-full">
                                {boardRow && boardRow.map((boardCell, cellIndex) => {
                                    return (
                                        <BoardCell key={`${rowIndex}-${cellIndex}`} bgColor="bg-blue-200" opponentType="cpu" showShips={showShips} rowIndex={rowIndex} cellIndex={cellIndex} cellInfo={boardCell} fireHandler={fireInCell} />
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
