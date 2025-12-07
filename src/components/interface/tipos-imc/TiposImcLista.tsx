import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { imcData } from "@/data/imcData"

export const TiposImcLista = () => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            {imcData.map((item, index) =>
                <Card key={index} className={`items-center ${item.cor} gap-6`}>

                    <div className="flex flex-col items-center gap-2">
                        <div className={`${item.bgImagem} p-6 rounded-full`}>
                            <img src={`projeto-imagens/${item.imagem}`} alt={item.tipo} className="size-8" />
                        </div>
                        <CardTitle className="text-2xl text-white font-bold">{item.tipo}</CardTitle>
                    </div>


                    <CardDescription className="text-white text-md font-medium">{item.descricao}</CardDescription>
                </Card>
            )}
        </div>
    )
}