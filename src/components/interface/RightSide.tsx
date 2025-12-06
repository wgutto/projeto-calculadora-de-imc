"use client"

import { useImc } from "@/contexts/ImcContext"

export const RightSide = () => {
    const imcContext = useImc()
    return (
        <div>RightSide {imcContext?.imc}</div>
    )
}