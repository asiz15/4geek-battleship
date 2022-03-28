import { useEffect, useState } from 'react'
import { useDrag } from 'react-dnd'
import { FaGripLinesVertical, FaGripLines } from 'react-icons/fa';
import logo from '../4geeks_battleship.jpeg'

export const Ship = ({ship}) => {
    const [localShip, setLocalShip] = useState({})
    const [{ isDragging }, dragRef] = useDrag({
        type: 'ship',
        item: { ...localShip },
        canDrag: () => {
            return localShip.availables > 0
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        end(props, monitor) {
            if(!monitor.didDrop()){
                setLocalShip(ship)
            }
        }
    })

    const changeShipOrientation = () => {
        setLocalShip(prevState => {
            return {
                ...prevState,
                orientation: prevState.orientation === 'vertical' ? 'horizontal' : 'vertical'
            }
        })
    }
    useEffect(() => {
        setLocalShip({...ship})
    }, [ship])

    useEffect(() => {
        if(isDragging){
            setLocalShip(prevState => {
                return {
                    ...prevState,
                    availables: prevState.availables - 1 || 0
                }
            })
        }
    }, [isDragging])
  return (
    <div className='flex flex-col w-full mb-5 relative border border-gray-100 py-2 px-4'>
        <div className="flex justify-end items-center">
         <span className="text-xs">Orientation</span>   
         <div onClick={changeShipOrientation} className="w-7 h-7 rounded-full flex justify-center items-center bg-blue-400 text-white shadow-md ml-2 cursor-pointer">
         { localShip.orientation === 'vertical' ? <FaGripLinesVertical size={12}/> : <FaGripLines size={12}/> }
         </div>
       
        </div>
        
        <h2 className="text-md font-bold">{ ship.name }</h2>
        <div className={`w-full h-20 text-xs flex items-center py-10  px-5 border border-gray-200 ${localShip.availables > 0 ? '' : 'bg-gray-100'}`} ref={dragRef}>
            <img src={ship.image} className="w-3/6" style={{pointerEvents: 'none'}}/>
        </div>
        <div className="w-full flex items-center justify-center">
        <span className="text-xs p-1 mr-3">Availables: <b>{ localShip.availables }</b></span>
        <span className="text-xs p-1">Ship length: <b>{ localShip.length }</b></span>
        </div>
        
    </div>
  )
}
7