
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GameDataContext } from "../context/GameContext"
import { useBoard } from "../hooks/useBoard"
import { BoardCell } from "./BoardCell"

export const Board = () => {
    const { board, setHighlightedCells, resetHighlightedCells, highlightedCells, commitShipPosition, resetBoard, clearBoardCells } = useBoard()
    const { player, cpu, game } = useContext(GameDataContext)
    let navigate = useNavigate()

    const removeAllShips = () => {
        resetBoard()
        player.resetPlayerShips()
    }
    

    const removeShipFromBoard = async(shipId, positions) => {
        await clearBoardCells(positions)
        await player.resetPlayerShip(shipId)
    }

    const confirmShipPositions = () => {
        player.setBoard(board)
        cpu.setBoard([
            [
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              }
            ],
            [
              {
                isAvailableToDrop: false,
                shipPositions: [
                  "10",
                  "20",
                  "30",
                  "40",
                  "50"
                ],
                isShipTail: false,
                shipInfo: {
                  id: 1,
                  name: "Carrier",
                  length: 5,
                  orientation: "vertical"
                },
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              }
            ],
            [
              {
                isAvailableToDrop: false,
                shipPositions: [
                  "10",
                  "20",
                  "30",
                  "40",
                  "50"
                ],
                isShipTail: false,
                shipInfo: {
                  id: 1,
                  name: "Carrier",
                  length: 5,
                  orientation: "vertical"
                },
                hasShot: false
              },
              {
                isAvailableToDrop: false,
                shipPositions: [
                  "21",
                  "22",
                  "23",
                  "24"
                ],
                isShipTail: false,
                shipInfo: {
                  id: 2,
                  name: "BattleShip",
                  length: 4,
                  orientation: "horizontal"
                },
                hasShot: false
              },
              {
                isAvailableToDrop: false,
                shipPositions: [
                  "21",
                  "22",
                  "23",
                  "24"
                ],
                isShipTail: false,
                shipInfo: {
                  id: 2,
                  name: "BattleShip",
                  length: 4,
                  orientation: "horizontal"
                },
                hasShot: false
              },
              {
                isAvailableToDrop: false,
                shipPositions: [
                  "21",
                  "22",
                  "23",
                  "24"
                ],
                isShipTail: false,
                shipInfo: {
                  id: 2,
                  name: "BattleShip",
                  length: 4,
                  orientation: "horizontal"
                },
                hasShot: false
              },
              {
                isAvailableToDrop: false,
                shipPositions: [
                  "21",
                  "22",
                  "23",
                  "24"
                ],
                isShipTail: true,
                shipInfo: {
                  id: 2,
                  name: "BattleShip",
                  length: 4,
                  orientation: "horizontal"
                },
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              }
            ],
            [
              {
                isAvailableToDrop: false,
                shipPositions: [
                  "10",
                  "20",
                  "30",
                  "40",
                  "50"
                ],
                isShipTail: false,
                shipInfo: {
                  id: 1,
                  name: "Carrier",
                  length: 5,
                  orientation: "vertical"
                },
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              }
            ],
            [
              {
                isAvailableToDrop: false,
                shipPositions: [
                  "10",
                  "20",
                  "30",
                  "40",
                  "50"
                ],
                isShipTail: false,
                shipInfo: {
                  id: 1,
                  name: "Carrier",
                  length: 5,
                  orientation: "vertical"
                },
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              }
            ],
            [
              {
                isAvailableToDrop: false,
                shipPositions: [
                  "10",
                  "20",
                  "30",
                  "40",
                  "50"
                ],
                isShipTail: true,
                shipInfo: {
                  id: 1,
                  name: "Carrier",
                  length: 5,
                  orientation: "vertical"
                },
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              }
            ],
            [
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              }
            ],
            [
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              }
            ],
            [
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              },
              {
                isAvailableToDrop: true,
                shipPositions: [],
                isShipTail: false,
                shipInfo: null,
                hasShot: false
              }
            ]
          ])
        game.setGameStage('main-game')
        navigate('/game')
    }

    useEffect(() => {
      if(game.stage && game.stage !== 'picking-ships'){
        navigate('/')
      }
    },[])
    return (
        <div className="w-full ot-10">
            <div className="flex mb-4 w-full justify-between">
            <p className="w-4/6 bg-gray-200 flex items-center rounded-md p-2">Drag and drop your ships to te board. Use the blue button to change their orientations.</p>
            <div className="flex">
            <button className="bg-green-400 p-2 text-white mr-3 text-sm" onClick={removeAllShips}>Reset Board</button>
            <button className="bg-blue-400 p-2 text-sm text-white" onClick={confirmShipPositions}>Continue</button>
            </div>
            </div>
            <div className="w-full ">
                {board && board.map((boardRow, rowIndex) => {
                    return (
                        <div key={`row-${rowIndex}`} className="flex">
                            <div className="grid grid-cols-9 w-full">
                                {boardRow && boardRow.map((boardCell, cellIndex) => {
                                    return (
                                        <BoardCell key={`${rowIndex}-${cellIndex}`} rowIndex={rowIndex} cellIndex={cellIndex} showShips={true}  setCallback={setHighlightedCells} resetCallback={resetHighlightedCells} highlightedCells={highlightedCells} cellInfo={boardCell} commitPositionCallback={commitShipPosition} removeShipHandler={removeShipFromBoard} board={board} />
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
