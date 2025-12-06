"use client"

import { createContext, ReactNode, useContext, useState } from "react";

type ImcContextType = {
    imc: number;
    setImc: (imc: number) => void;
}
const ImcContext = createContext<ImcContextType | null>(null);

type Props = {
    children: ReactNode;
}
export const ImcProvider = ({children}: Props) => {
    const [imc, setImc] = useState(0);
    return (
        <ImcContext.Provider value={{imc, setImc}}>
            {children}
        </ImcContext.Provider>
    )
}

export const useImc = () => useContext(ImcContext)
