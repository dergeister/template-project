# Setup

## Inicialização do projeto

Para instalar as dependencias: `npm install`

Para rodar o projeto local: `npm run dev`

O projeto utiliza **JSON Server** para simular endpoints, por conta disso, além de iniciar o projeto Vue, será necessário iniciar em um segundo terminal o server com o comando custom `npm run db`

## Pinia

Pinia é o sucessor do Vuex (este tendo [entrado em modo de manutenção](https://vuex.vuejs.org/#what-is-vuex)) e é o novo gerenciador de estados oficial, mesmo tendo um nome diferente, a sintaxe é similar as stores do Vuex.

## Vue i18n

Utilizado por conta de ja ter experiencia com a biblioteca, ser de fácil configuração e ser a biblioteca de internacionalização mais popular para Vue

## Primevue

Por conta de ser um dos poucos frameworks que suportava Vue 3 quando comecei a estuda-lo e por fornecer diversos componentes que facilitam o desenvolvimento decidi seguindo utilizando.

## Vuelidate

O Vuelidate é uma biblioteca que eu ja tenho experiência e a simplicidade de uso junto com a declaração de validações mesclar bem com a construção de um componente me fez continuar utilizando, outras alternativas como Veevalidate são mais robustas, mas neste caso optei pela simplicidade.

## Event Emitter (Mitt)

Mitt é uma biblioteca simples para registrar e emitir eventos, além de registrar nas variaveis globais do Vue e para acessar em lugares como a store, ele é passado como referencia na inicialização de outras bibliotecas

## Dinerojs

Dinero é uma biblioteca para operações com moedas de fácil utilização por conta de permitir chain methods por conta da operação retornar uma instancia Dinero.

## Vue the mask

Vue the mask é uma biblioteca que fornece fácil uso de mascaras para inputs, neste projeto optei por usar o uso por diretiva para tornar mais centralizado as customizações dos inputs
