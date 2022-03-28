import React, { useContext } from 'react'
import { GameDataContext } from '../context/GameContext'
import { useShips } from '../hooks/useShips'
import { Ship } from './Ship'


export const ShipsPicker = () => {
    const {player} = useContext(GameDataContext)
  return (
    <div className="flex w-full flex-col">
        {player?.ships && player?.ships.map((ship) => {
            return(
                <Ship key={ship.id} ship={ship}/>
            )
        })}
    </div>
  )
}
