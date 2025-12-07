"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "../ui/button"
import { useImc } from "@/features/contexts/ImcContext"


const formSchema = z.object({
    altura: z.string().min(1, "Preencha o campo de altura.")
        .refine((valor) => !isNaN(Number(valor)) && Number(valor) > 0, {
            message: "A altura deve ser um número positivo."
        }),
    peso: z.string().min(1, "Preencha o campo de peso.")
        .refine((valor) => !isNaN(Number(valor)) && Number(valor) > 0, {
            message: "O peso deve ser um número positivo."
        }),
})

export const FormArea = () => {
    const imcContext = useImc();
    let ativoDesativo = 0
    if(imcContext?.imc) {
        ativoDesativo = imcContext?.imc
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            altura: "",
            peso: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const alturaNum = parseFloat(values.altura);
        const pesoNum = parseFloat(values.peso);
        const imcValue = pesoNum / (alturaNum * alturaNum); 
        imcContext?.setImc(parseFloat(imcValue.toFixed(2)));
        console.log(values)
    }

    return (
        <div className="mt-5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="altura"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Altura</FormLabel>
                                <FormControl>
                                    <input 
                                        type="number" 
                                        placeholder="Digite sua altura. Ex: 1.56 (em métros)"
                                        className="border-b-3 px-1 py-3 outline-none"
                                        disabled={ativoDesativo > 0}
                                    {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="peso"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Peso</FormLabel>
                                <FormControl>
                                    <input 
                                        type="number" 
                                        placeholder="Digite seu peso. Ex: 75.8 (em kg)"
                                        className="border-b-3 px-1 py-3 outline-none"
                                        disabled={ativoDesativo > 0}
                                    {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-full my-5 bg-cyan-900 text-white cursor-pointer hover:bg-cyan-950" type="submit" disabled={ativoDesativo > 0}>Calcular</Button>
                </form>
            </Form>
        </div>
    )
}