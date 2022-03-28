import { useContext, useState } from 'react';
import { useDrop } from 'react-dnd';
import { FaCircle } from 'react-icons/fa';
import { GameDataContext } from '../context/GameContext';


export const BoardCell = ({ showShips, rowIndex, cellIndex, setCallback, highlightedCells, resetCallback, cellInfo, commitPositionCallback, removeShipHandler, fireHandler, height, opponentType, board, bgColor }) => {
    const { game, cpu } = useContext(GameDataContext)
    const [{ isOver }, dropRef] = useDrop({
        accept: 'ship',
        canDrop: () => {
            return board[rowIndex][cellIndex].isAvailableToDrop
        },
        drop: (item) => {
            return highlightedCells.length ? commitPositionCallback(item, highlightedCells) : resetCallback()
        },
        hover: (item) => {

            if(game && game.stage === 'picking-ships'){
                const { orientation, length } = item
            const getPossibleCells = () => {
                let possibleCells = []
                if (orientation === 'vertical') {
                    for (let index = 0; index < length; index++) {
                        const cell = board[rowIndex + index][cellIndex]
                        possibleCells.push(cell)

                    }
                }
                if (orientation === 'horizontal') {
                    for (let index = 0; index < length; index++) {
                        const cell = board[rowIndex][index + cellIndex]
                        possibleCells.push(cell)

                    }
                }
                return possibleCells
            }

            const createHighlightedCellsHorizontally = () => {
                let posibleShipCoordinates = []
                for (let index = 0; index < length; index++) {
                    const coordinate = [rowIndex, cellIndex + index]
                    posibleShipCoordinates.push(coordinate)

                }
                posibleShipCoordinates = posibleShipCoordinates.map(c => c.join(''))
                setCallback(posibleShipCoordinates)
            }
            const createHighlightedCellsVertically = () => {
                let posibleShipCoordinates = []
                for (let index = 0; index < length; index++) {
                    const coordinate = [rowIndex + index, cellIndex]
                    posibleShipCoordinates.push(coordinate)

                }
                posibleShipCoordinates = posibleShipCoordinates.map(c => c.join(''))
                setCallback(posibleShipCoordinates)
            }
            if(orientation === 'horizontal'){
                return cellIndex + length <= 9 && cellInfo?.isAvailableToDrop && getPossibleCells().every(cell => cell.isAvailableToDrop)   ? createHighlightedCellsHorizontally() : resetCallback()
            }
            if(orientation === 'vertical' &&  rowIndex + length <= 9){
                return rowIndex + length <= 9 && cellInfo?.isAvailableToDrop && getPossibleCells().every(cell => cell.isAvailableToDrop)  ? createHighlightedCellsVertically() : resetCallback()

            }

            return resetCallback()
            }

            return


        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })
    const isHighlighted = () => {
        const parsedCoordinates = () => {
            return [rowIndex, cellIndex].join('')
        }
        return highlightedCells ? highlightedCells.includes(parsedCoordinates()) : false
    }
    const removeShip = async () => {
        removeShipHandler(cellInfo?.shipInfo?.id, cellInfo?.shipPositions)
    }

    const clickOnCell = () => {
        if (fireHandler) {
            fireHandler(rowIndex, cellIndex)
        }

    }

    const cellIsDestroyed = (cell) => {
        return cell?.hasShot && cell?.shipInfo?.id
    }

    const getOpponentCell = () => {
        if (opponentType && opponentType === 'cpu') {
            const opponentCell = cpu.board[rowIndex][cellIndex]
            return opponentCell
        }

    }

    const getBgColor = () => {
        return bgColor || ''
    }

    return (
        <div onClick={clickOnCell} className={`w-full ${height ? `h-${height}` :'h-20'} ${getBgColor()} relative border border-gray-100 flex justify-center items-center cursor-pointer  ${isHighlighted() && showShips ? 'bg-blue-400 ' : cellInfo?.isAvailableToDrop ? '' : game.stage === 'picking-ships' ? 'bg-red-100' : ''}`} ref={dropRef}>
            {game && game?.stage === 'main-game' &&
                <div className="text-xs absolute top-0 right-0 flex">
                    {cellIsDestroyed(getOpponentCell(rowIndex, cellIndex)) ?
                        <FaCircle size={10} className="fill-green-400" /> :
                        (getOpponentCell(rowIndex, cellIndex)?.hasShot) ?
                            <FaCircle size={10} className="fill-yellow-400" /> : ''
                    }

                </div>
            }
            {cellInfo?.shipInfo && showShips &&
                <span className={`font-bold ${cellInfo?.shipInfo?.orientation === 'vertical' ? 'rotate-90 pl-2 text-sm' : 'text-sm'}`}>{cellInfo?.shipInfo?.name}</span>
            }
            {/* Boton quitar */
                cellInfo.isShipTail && showShips && game.stage === 'picking-ships' &&
                <button onClick={removeShip} className="w-5 h-5 bg-red-400 flex items-center justify-center p-1 rounded-full text-xs">X</button>
            }
            {cellInfo?.hasShot && !cellIsDestroyed(cellInfo) &&
                <span className="absolute top-0 left-0" style={{fontSize: '.5em'}}>Enemy shot (miss)</span>
            }
            {/* { cellInfo?.fired && 
            <span className="text-sm text-blue-400 relative top-0">Fired</span>
       } */}
            {
                cellIsDestroyed(cellInfo) &&
                <span className={`top-0 left-0 text-red-400 font-bold ${cellInfo?.shipInfo?.orientation === 'vertical' && showShips ? 'rotate-90 absolute left-0 bottom-0': ''}`} style={{fontSize: '.5em'}}>Enemy shot (hit)</span>
            }
            {/* {
                getOpponentCell() && cellIsDestroyed(getOpponentCell()) && !showShips &&

                'Enemy destoyed'
            } */}
        </div>
    )
}
