## 👨‍💻 Links

- Repositório: [projeto-calculadora-de-imc](https://github.com/wgutto/projeto-calculadora-de-imc)
- Site: [projeto-calculadora-de-imc](https://projeto-calculadora-de-imc-pearl.vercel.app/)

# 🏥 Calculadora de IMC - Índice de Massa Corporal

Uma aplicação web moderna e responsiva para calcular o Índice de Massa Corporal (IMC) com uma interface intuitiva e informações detalhadas sobre categorias de peso.

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss)

## 📋 Sobre o Projeto

O **Calculadora de IMC** é uma aplicação educacional e prática que permite aos usuários:

- ✅ Calcular seu Índice de Massa Corporal (IMC)
- 📊 Visualizar sua classificação de peso em tempo real
- 🎨 Explorar todas as categorias de IMC com cores e ícones visuais
- 🌓 Alternar entre modo claro e escuro
- 📱 Acessar a aplicação em qualquer dispositivo (responsiva)

### Fórmula de Cálculo

O IMC é calculado utilizando a fórmula internacional:

$$\text{IMC} = \frac{\text{Peso (kg)}}{\text{Altura (m)}^2}$$

### Categorias de IMC

| Categoria | Intervalo | Cor |
|-----------|-----------|-----|
| **Magreza** | 0 - 18.4 | 🔵 Azul |
| **Normal** | 18.5 - 24.9 | 🟢 Verde |
| **Sobrepeso** | 25 - 29.9 | 🟡 Amarelo |
| **Obesidade** | 30 - 39.9 | 🟠 Laranja |
| **Obesidade Severa** | 40+ | 🔴 Vermelho |

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 16** - Framework React com renderização otimizada
- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS 4** - Framework CSS utilitário para estilização

### Estado e Formulários
- **React Hook Form** - Gerenciamento de formulários eficiente
- **Zod** - Validação de dados em tempo real
- **React Context API** - Gerenciamento de estado global

### UI Components
- **shadcn/ui** - Componentes acessíveis e personalizáveis
- **Radix UI** - Primitivos de UI de baixo nível
- **Lucide React** - Ícones SVG elegantes

### Utilitários
- **next-themes** - Suporte a temas (claro/escuro)
- **class-variance-authority** - Variações de classes CSS
- **tailwind-merge** - Merge inteligente de classes Tailwind

## 🎨 Funcionalidades Principais

### Formulário Validado
- Validação em tempo real com Zod
- Mensagens de erro claras
- Campos obrigatórios e com máscara numérica

### Interface Responsiva
- Design mobile-first
- Compatível com desktop, tablet e smartphone
- Layout flexível e adaptável

### Sistema de Temas
- Modo claro e escuro
- Persistência de preferência do usuário
- Transições suaves entre temas

## 🧪 Testes e Validação

O projeto utiliza:
- **TypeScript** para validação de tipos em tempo de compilação
- **ESLint** para análise estática de código
- **Zod** para validação de dados em runtime

## 🔐 Segurança

- Validação de entrada com Zod
- Tipagem forte com TypeScript
- Uso de Context API para evitar prop drilling
- Componentes otimizados com React.memo (onde aplicável)
