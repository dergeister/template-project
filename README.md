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

## BEM

BEM é um component-based approach onde a nomenclatura de classes segue uma estrutura de Bloco Elemento Modificador, tornando mais fácil agrupar classes que pertencem ao mesmo contexto

## Scss

O pré-processador Scss fornece uma sintaxe de nested classes que reduz a escrita de niveis de especificidade no CSS, além de tornar mais prático a criação de classes com o padrão BEM

## Atomic Design

O Atomic Design é uma metodologia de organização de componentes onde se categorizam componentes como `atoms`, `molecules`, `organisms`, `templates` e `pages` com a finalidade de criar interfaces de uma maneira mais deliberada e seguindo uma hierarquia.

Decidi utiliza-la por funcionar muito bem com o padrão BEM, além de ajudar a previnir a ambiguidade de criação de componentes.

Com isso, temos formulários de um módulo dentro de `/components/mocules/forms/` ao invés de ter uma pasta para cada página.

## Themes Context

O Themes Context é um componente que engloba todos os outros contextos e o `<router-view>` controla a aplicação das classes `system` e `system--{tema}` de variação de temas no `<body>`.
O contexto fornece um método para a component tree poder alterar o tema atual via `provide: { changeTheme }`.

## Internationalization Context

Similar ao Themes Context, este contexto é um componente que engloba o contexto de erros e o `<router-view>`.
O contexto fornece um método para a component tree poder alterar o locale atual via `provide: { changeLocale }`.

## Error Boundry Context

Ele é responsável por capturar todos os erros que acontecem nos componentes pelo método `errorCaptured`, além disso, em conjunto com o event emitter, o ele captura o evento UNBOUND ERROR para erros fora dos componentes vue.
Ao capturar o erro, o contexto dispara um toast com a mensagem e configuração apropriadas para o erro capturado.

## JSDocs

Um dos grandes problemas do javascript é na passagem de parâmetros para funções, não ter uma referencia para o tipo de variavel que deve ser enviado para a função ou que a função está recebendo, para resolver este problema e utilizar intellisence é utilizado JSDocs para documentar as funções.

## Cypress (Unit/Component + E2E Testing)

É utilizado Cypress para realizar os testes no sistema, os elementos são setados o atributo `data-cy="identificador-de-teste"` para facilitar a seleção na construção dos testes e utiliza-se fixtures para simular os dados de teste.
Os testes e2e são criados na pasta `/cypress/e2e`, já os testes unitários/componentes serão criados na mesma pasta do componente que esta sendo testado.

## ESLint + Prettier

Utiliza-se a combinação de ESLint + Prettier para padronizar diversos pontos do desenvolvimento e segir padrões do mercado, ajudando a evitar más práticas e homogenizando a formatação dos arquivos.

Algumas das regras adicionadas são:

### ESLint:

- no-console: on

### Prettier

- vueIndentScriptAndStyle: true

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
