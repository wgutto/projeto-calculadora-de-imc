import { LeftSide } from "./LeftSide"
import { RightSide } from "./RightSide"

export const SideArea = () => {
    return (
        <div className="my-15 flex gap-10">
            <LeftSide />

            <RightSide/>
        </div>
    )
}