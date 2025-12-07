"use client"

import { useImc } from "@/contexts/ImcContext"
import { TipoImcMagreza } from "./tipos-imc/TipoImcMagreza"
import { TipoImcNormal } from "./tipos-imc/TipoeImcNormal"
import { TipoImcObeso } from "./tipos-imc/TipoImcObeso"
import { TipoImcSobrepeso } from "./tipos-imc/TipoImcSobrepeso"
import { TiposImcLista } from "./tipos-imc/TiposImcLista"

export const RightSide = () => {
    const imcContext = useImc()
    
    if (!imcContext) return null
    
    return (
        <section className="w-full min-h-full flex justify-center">
            {imcContext.imc === 0 &&
                <TiposImcLista/>
            }

            {imcContext.imc > 0 && imcContext.imc <= 18.4 && <TipoImcMagreza/>}
            {imcContext.imc > 18.4 && imcContext.imc <= 24.9 && <TipoImcNormal/>}
            {imcContext.imc > 24.9 && imcContext.imc <= 29.9 && <TipoImcSobrepeso/>}
            {imcContext.imc >= 30 && <TipoImcObeso/>}

        </section>
    )
}