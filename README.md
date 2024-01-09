# Template Project

Esse projeto tem como objetivo definir o padrão de projetos front-end Vuejs.

O escopo do projeto é simular um fluxo de pagamento onde o usuário escolhe entre duas modalidades de assinatura e é redirecionado para uma página de pagamento onde são listados os respectivos planos para a modalidade escolhida e preencher as informações de método de pagamento, ao finalizar a assinatura, o usuário deve ser redirecionado para uma tela de pagamento realizado.

# Setup

Para instalar as dependencias: `npm install`

Para rodar o projeto local: `npm run dev`

O projeto utiliza **JSON Server** para simular endpoints, por conta disso, além de iniciar o projeto Vue, será necessário iniciar em um segundo terminal o server com o comando custom `npm run db`

# Definições

## Options Api

Optei por utilizar Options Api por diversos motivos, o principal é a familiriaridade na hora de novos desenvolvedores atuarem no projeto, a comunidade que trabalhou com Vue 2 ja utiliza além de possuir guard rails que ajudam a guiar o desenvolvimento.
Por mais que a Composition Api seja a base do desenvolvimento do framework e que ela seja a Api recomendada a partir do Vue 3 ainda existirá suporte para a Options Api, [não tendo planos para descontinua-la](https://vuejs.org/guide/extras/composition-api-faq.html#will-options-api-be-deprecated)

## Pinia

Pinia é o sucessor do Vuex (este tendo [entrado em modo de manutenção](https://vuex.vuejs.org/#what-is-vuex)) e é o novo gerenciador de estados oficial, mesmo tendo um nome diferente, a sintaxe é similar as stores do Vuex.

## Vue i18n

Utilizado por conta de ja ter experiencia com a biblioteca, ser de fácil configuração e ser a biblioteca de internacionalização mais popular para Vue

## BEM

BEM é um component-based approach onde a nomenclatura de classes segue uma estrutura de Bloco Elemento Modificador, tornando mais fácil agrupar classes que pertencem ao mesmo contexto

## Scss

O pré-processador Scss fornece uma sintaxe de nested classes que reduz a escrita de niveis de especificidade no CSS, além de tornar mais prático a criação de classes com o padrão BEM

## Atomic Design

-

## Themes Context

-

## Error Boundry Context

-

# Factories

-

# JSDocs

-

# Cypress (Unit/Componente + E2E Testing)

-

# ESLint + Prettier

-

# Primevue

-

# Vuelidate

-

# Event Emitter (Mitt)

-

# Dinerojs

-

# Vue the mask

-
