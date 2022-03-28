import { Board } from "../components/Board"
import { ShipsPicker } from "../components/ShipsPicker"

export const OrderShips = () => {
  return (
    <div className="w-full grid grid-cols-12 gap-3">
        <div className="col-span-3">
            <ShipsPicker/>
        </div>
        <div className="col-span-9">
            <Board/>
        </div>
    </div>
  )
}
