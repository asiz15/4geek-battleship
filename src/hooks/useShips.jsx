import { useEffect, useState } from "react"


export const useShips = () => {
    const [ships, setShips] = useState([])
    
    const resetShipPickers = () => {
        setShips([
            {
                id: 1,
                name: 'Carrier',
                image: 'https://lci-insight-media-storage.fra1.digitaloceanspaces.com/test_images/ship5.png',
                length: 5,
                availables: 1,
                orientation: 'vertical'
            },
            {
                id: 2,
                image: 'https://lci-insight-media-storage.fra1.digitaloceanspaces.com/test_images/ship2.png',
                name: 'BattleShip',
                length: 4,
                availables: 1,
                orientation: 'horizontal'
            },
            {
                id: 3,
                image: 'https://lci-insight-media-storage.fra1.digitaloceanspaces.com/test_images/ship4.png',
                name: 'Cruiser',
                length: 3,
                availables: 1,
                orientation: 'horizontal'
            },
            {
                id: 4,
                image: 'https://lci-insight-media-storage.fra1.digitaloceanspaces.com/test_images/ship6.png',
                name: 'Submarine',
                length: 3,
                availables: 1,
                orientation: 'horizontal'
            },
            {
                id: 5,
                image: 'https://lci-insight-media-storage.fra1.digitaloceanspaces.com/test_images/ship4.png',
                name: 'Destroyer',
                length: 2,
                availables: 1,
                orientation: 'vertical'
            }
        ])
    }
    const resetShipPicker = (shipId) => {        
        const shipInd = ships.findIndex(ship => ship?.id === shipId)
        const updatedShips = [...ships]
        updatedShips[shipInd] = { ...updatedShips[shipInd], availables: 1}

        setShips(updatedShips)
        
    }

    useEffect(() => {
        setShips([
            {
                id: 1,
                name: 'Carrier',
                image: 'https://lci-insight-media-storage.fra1.digitaloceanspaces.com/test_images/ship5.png',
                length: 5,
                availables: 1,
                orientation: 'vertical'
            },
            {
                id: 2,
                image: 'https://lci-insight-media-storage.fra1.digitaloceanspaces.com/test_images/ship2.png',
                name: 'BattleShip',
                length: 4,
                availables: 1,
                orientation: 'horizontal'
            },
            {
                id: 3,
                image: 'https://lci-insight-media-storage.fra1.digitaloceanspaces.com/test_images/ship4.png',
                name: 'Cruiser',
                length: 3,
                availables: 1,
                orientation: 'horizontal'
            },
            {
                id: 4,
                image: 'https://lci-insight-media-storage.fra1.digitaloceanspaces.com/test_images/ship6.png',
                name: 'Submarine',
                length: 3,
                availables: 1,
                orientation: 'horizontal'
            },
            {
                id: 5,
                image: 'https://lci-insight-media-storage.fra1.digitaloceanspaces.com/test_images/ship4.png',
                name: 'Destroyer',
                length: 2,
                availables: 1,
                orientation: 'vertical'
            }
        ])
    },[])

  return { ships, setShips, resetShipPicker, resetShipPickers }
}
