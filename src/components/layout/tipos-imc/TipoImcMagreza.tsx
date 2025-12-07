import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { useImc } from "@/features/contexts/ImcContext"
import { imcData } from "@/constants/imcData"

export const TipoImcMagreza = () => {
    const imcContext = useImc()
    const tipoMagreza = imcData.filter((item) => item.tipo === "Magreza")
    return (
        <div className="w-full h-full">
            {tipoMagreza.map((item, index) =>
                <Card key={index} className={`relative w-full h-full items-center justify-center ${item.cor}`}>
                    <div className="flex flex-col items-center gap-2">
                        <div className={`${item.bgImagem} p-6 rounded-full`}>
                            <img src={`projeto-imagens/${item.imagem}`} alt={item.tipo} className="size-9" />
                        </div>
                        <CardTitle className="text-3xl text-white font-bold">{item.tipo}</CardTitle>
                    </div>


                    <CardDescription className="text-white text-xl font-medium">Seu IMC é de {imcContext?.imc.toFixed(2)} kg/m²</CardDescription>

                    <CardDescription className="text-white text-md mt-15">
                        {item.descricao}
                    </CardDescription>

                    <button onClick={() => imcContext?.setImc(0)} className="absolute -left-0.5 -top-0.5 rounded-tl-md rounded-br-md bg-cyan-900 p-6 rounded- cursor-pointer hover:bg-cyan-950 lg:rounded-full lg:p-6 lg:-left-10 lg:top-auto">
                        <img className="size-4 lg:size-8" src={`projeto-imagens/leftarrow.png`} alt="" />
                    </button>
                </Card>
            )}
        </div>
    )
}