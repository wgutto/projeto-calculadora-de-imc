import { LeftSide } from "./LeftSide"
import { RightSide } from "./RightSide"

export const SideArea = () => {
    return (
        <div className="my-15 gap-20 lg:flex">
            <LeftSide />

            <RightSide/>
        </div>
    )
}