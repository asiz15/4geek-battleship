import { useEffect, useState } from "react"

export const useBoard = () => {
    const createCellInstance = () => {
        return {
            isAvailableToDrop: true,
            shipPositions: [],
            isShipTail: false,
            shipInfo: null,
            hasShot: false,
            fired: false
        }
    }
    const createBoardMatrix = () => {
        return Array.from(Array(9).fill(0), () => Array(9).fill(createCellInstance()))
    }
    const [board, setBoard] = useState(createBoardMatrix())

    const [highlightedCells, setHighlightedCells] = useState([])
    const resetHighlightedCells = () => {
        setHighlightedCells([])
    }
    const parseStringToArrayPosition = (arrOfPositionsStrings) => {
        return arrOfPositionsStrings.map(coordinate => coordinate.split('').map(c => +c))
     }
    const commitShipPosition = (shipInfo, arrOfPositions) => {
        const positionsToUpdate = parseStringToArrayPosition(arrOfPositions)
        let updatedBoard = [...board]
        positionsToUpdate.forEach(([rowIndex,cellIndex]) => {          
            updatedBoard[rowIndex][cellIndex] = {
                ...createCellInstance(),
                 isAvailableToDrop: false, 
                 shipInfo: {id: shipInfo.id, name: shipInfo.name, length: shipInfo.length, orientation: shipInfo.orientation },
                 shipPositions: arrOfPositions, 
                 isShipTail: [rowIndex,cellIndex].join('').toLowerCase() === arrOfPositions[arrOfPositions.length - 1]
            
            }
        });

        setBoard(updatedBoard)
        resetHighlightedCells()
    }
    const resetBoard = async() => {
        await setBoard(createBoardMatrix())
        await setHighlightedCells([])
    }
    const clearBoardCells = (arrOfShipPositions => {
        const updatedBoard = [...board]
        const positionsToReset = parseStringToArrayPosition(arrOfShipPositions)
        positionsToReset.forEach(([rowIndex,cellIndex]) => {
            updatedBoard[rowIndex][cellIndex] = createCellInstance()
        });
        setBoard(updatedBoard)
    })

    const getBoardAsCells = () => {
        let boardAsCells = []
        board.forEach(row => {
            return row.forEach(cell => {
                boardAsCells.push(cell)
            });
        });

        return boardAsCells
    }

    const getAvailablesCells = () => {
        return getBoardAsCells().filter(cell => cell.isAvailableToDrop)
    }

    const getUnavailablesCells = () => {
        return getBoardAsCells().filter(cell => !cell.isAvailableToDrop)
    }

    return {board, setHighlightedCells, resetHighlightedCells, highlightedCells, commitShipPosition, resetBoard, clearBoardCells, getAvailablesCells, getUnavailablesCells, setBoard}
}
