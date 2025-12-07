import { FormArea } from "./FormArea"

export const LeftSide = () => {
    return (
        <section className="flex flex-col gap-6 lg:max-w-xl">
            <h2 className="font-bold text-5xl">Calcule o seu IMC.</h2>

            <p className="text-justify text-muted-foreground text-md">O IMC (Índice de Massa Corporal) é uma medida usada para avaliar se uma pessoa está com o peso adequado para sua altura. Ele é calculado dividindo o peso pela altura ao quadrado. O resultado indica categorias como baixo peso, peso normal, sobrepeso ou obesidade, ajudando a identificar possíveis riscos à saúde.</p>


            <FormArea />
        </section>
    )
}