import { imcDataType } from "@/types/imcDataType";

export const imcData: imcDataType[] = [
    {
        imagem: "down.png",
        tipo: "Magreza",
        minimo: 1,
        maximo: 18.4,
        descricao: "O IMC está entre 0 e 18.4",
        cor: "bg-gray-400",
        bgImagem: "bg-gray-500/80"
    },
    {
        imagem: "up.png",
        tipo: "Normal",
        minimo: 18.5,
        maximo: 24.9,
        descricao: "O IMC está entre 18.5 e 24.9",
        cor: "bg-green-400",
        bgImagem: "bg-green-500/80"
    },
    {
        imagem: "down.png",
        tipo: "Sobrepeso",
        minimo: 25,
        maximo: 29.9,
        descricao: "O IMC está entre 25 e 29.9",
        cor: "bg-yellow-400",
        bgImagem: "bg-yellow-500/80"
    },
    {
        imagem: "down.png",
        tipo: "Obesidade",
        minimo: 30,
        maximo: Infinity,
        descricao: "O IMC está entre 30 e 39.9",
        cor: "bg-red-400",
        bgImagem: "bg-red-500/80"
    },
];
