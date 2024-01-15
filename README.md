# Template Project

Esse projeto tem como objetivo definir o padrão de projetos front-end Vuejs.

O escopo do projeto é simular um fluxo de pagamento onde o usuário escolhe entre duas modalidades de assinatura e é redirecionado para uma página de pagamento onde são listados os respectivos planos para a modalidade escolhida e preencher as informações de método de pagamento, ao finalizar a assinatura, o usuário deve ser redirecionado para uma tela de pagamento realizado.

Eu queria testar algumas implementações de **contextos** para gerenciar diferentes camadas da aplicação são eles `Themes Context`, `Internationalization Context` e `Error Boundry Context`.

# Setup

Para acessar as informações sobre setup acessar [SETUP.md](https://github.com/dergeister/template-project/blob/main/SETUP.md)

# Definições

## Estrutura de Pastas

O projeto é feito utilizando `module based folder` onde arquivos relativos a uma parte do sistema são criados dentro de uma pasta para o módulo no caminho `/modules/` e arquivos em comum são criados na pasta `/modules/_common`.

A vantagem do module based folder ao invés do `type based folder` é que os arquivos são organizados com base na sua relevância, não tendo arquivos de dois módulos se misturando, melhorando assim a organização da pasta `/components/`.

## Options Api

Optei por utilizar Options Api por diversos motivos, o principal é a familiriaridade para novos desenvolvedores atuarem no projeto, a comunidade que trabalhou com Vue 2 ja a utiliza, além de possuir guard rails que ajudam a guiar a criação e estruturação de componentes.

Por mais que a Composition Api seja a base do desenvolvimento do framework e que ela seja a Api recomendada a partir do Vue 3 ainda existirá suporte para a Options Api, [não tendo planos para descontinua-la](https://vuejs.org/guide/extras/composition-api-faq.html#will-options-api-be-deprecated).

## BEM

BEM é um component-based approach onde a nomenclatura de classes segue uma estrutura de Bloco Elemento Modificador, tornando mais fácil agrupar classes que pertencem ao mesmo contexto.

Por exemplo: Um card onde deve se exibir uma imagem, um título, uma descrição e um botão que possa variar a cor de fundo entre as cores verde e azul, pode ter suas classes descritas como:

```html
<div class="example-card">
  <img
    class="example-card__img"
    src="..."
    alt="..."
  />
  <h3 class="example-card__title">...</h3>
  <p class="example-card__description">...</p>
  <button class="example-card__button example-card__button--blue">...</button>
</div>
```

A variação de cores pode ser fácilmente resolvida utilizando uma propriedade `computed` no atributo classe, dessa maneira é possivel alterar programaticamente o valor das classes do botão

```html
<button class="exampleButtonClasses">...</button>
```

```js
exampleButtonClasses() {
  // via array
  return ['example-card__button', `example-card__button--${this.variation}`]

  //via objeto
  return {
    'example-card__button': true,
    'example-card__button--blue': this.variation === 'blue',
    'example-card__button--green': this.variation === 'green'
  }
}
```

## Scss

O pré-processador Scss fornece uma sintaxe de nested classes que reduz a escrita de niveis de especificidade no CSS, além de tornar mais prático a criação de classes com o padrão BEM.

Utilizando o exemplo anterior, podemos declarar as classes como:

```scss
.example-card {
  &__title {
    ...
  }

  &__image {
    ...
  }

  &__description {
    ...
  }

  &__button {
    ...

    &--green {
      ...
    }

    &--blue {
      ...
    }
  }
}
```

## Atomic Design

O Atomic Design é uma metodologia de organização de componentes onde se categorizam componentes como `atoms`, `molecules`, `organisms`, `templates` e `pages` com a finalidade de criar interfaces de uma maneira mais deliberada e seguindo uma hierarquia.

Decidi utiliza-la por funcionar muito bem com o padrão BEM, além de ajudar a previnir a ambiguidade de criação de componentes.

Com isso, temos formulários de um módulo dentro de `/components/mocules/forms/` ao invés de ter uma pasta para cada página.

## Enums

O javascript não tem suporte nativo para enums, mas ainda assim eu queria evitar comparar valores de `string` e `numeric` soltos no código, para isso utilizei o `Object.freeze()` do javascript para criar objetos imutaveis.

Todos os enums são declarados dentro da pasta `/domain/enums/`.

Seguindo com o exemplo dos cards, anteriormente o computed de classes retornando um objeto comparava a prop `this.variant` com as strings `blue` e `green`, atualizando isso para object freeze temos:

```js
const ExampleButtonVariantsEnum = Object.freeze({
  BLUE: 'blue',
  GREEN: 'green'
})
```

Desta maneira podemos atribuir outros valores além de `numeric` para o valor da chave. Com este exemplo ambos os retornos com array e objeto funcionam como anteriormente.

```js
exampleButtonClasses() {
  // via array
  return ['example-card__button', `example-card__button--${this.variation}`]

  //via objeto
  return {
    'example-card__button': true,
    'example-card__button--blue': this.variation === ExampleButtonVariantsEnum.BLUE,
    'example-card__button--green': this.variation === ExampleButtonVariantsEnum.GREEN
  }
}
```

## Themes Context

O Themes Context é um componente que engloba todos os outros contextos e o `<router-view>` controla a aplicação das classes `system` e `system--{tema}` de variação de temas no `<body>`.

O contexto fornece um método para a component tree poder alterar o tema atual via `provide: { changeTheme }`, desta maneira para um componente filho pode invocar `this.changeTheme(ThemesEnum.MainTheme)`.

## Internationalization Context

Similar ao Themes Context, este contexto é um componente que engloba o contexto de erros e o `<router-view>`.

O contexto fornece um método para a component tree poder alterar o locale atual via `provide: { changeLocale }`, desta maneira para um componente filho pode invocar `this.changeLocale(LocaleEnum.PT)`.

Este método altera o locale do i18n:

```js
handleChangeLocale(newLocale) {
  if (!Object.values(LocaleEnum).includes(newLocale)) {
    throw new Error(ErrorEnum.INVALID_LOCALE)
  }

  this.$i18n.locale = newLocale
}
```

## Error Boundry Context

Ele é responsável por capturar todos os erros que acontecem nos componentes pelo método `errorCaptured`.

No trecho de código acima o Internationalization Context da `throw` caso o valor enviado por parametro não exista no enum de locales, o Error Boundry Context então captura o erro e o trata.

Para erros fora dos componentes, o Error Boundry Context registra um listener para o evento de `UNBOUND_ERROR` que é disparado por partes do projeto fora do Vue, em ambos os casos é enviado um `ErrorEnum`.

```js
bindError(errorType) {
  const customError = CustomErrorFactory.createCustomError(errorType)
  this.$toast.add(customError)
}

registerEvents() {
  this.emitter.on(EventEnum.UNBOUND_ERROR, this.bindError)
}
```

## JSDocs

Um dos grandes problemas do javascript é na passagem de parâmetros para funções, não ter uma referencia para o tipo de variável que deve ser enviado ou que a função está recebendo, para resolver este problema é utilizado JSDocs para documentar as funções e como outro benefício utilizar intellisence.

## Cypress (Unit/Component + E2E Testing)

É utilizado Cypress para realizar os testes no sistema, é setado o atributo `data-cy="identificador-de-teste"` nos elementos testaveis para facilitar a seleção na construção dos testes.

Durante a criação de testes utiliza-se as `fixtures` para mock de dados e `commands` para reutilizar ações comuns.

Os testes e2e são criados na pasta `/cypress/e2e`, já os testes unitários/componentes serão criados na mesma pasta do componente que esta sendo testado.

## ESLint + Prettier

Utiliza-se a combinação de ESLint + Prettier para padronizar diversos pontos do desenvolvimento e seguir padrões do mercado, ajudando a evitar más práticas e homogenizando a formatação dos arquivos.

Algumas das regras adicionadas são:

### ESLint:

- no-console: error
- no-undef: off (apenas para arquivos .cy.js e arquivos .js dentro da pasta cypress)

### Prettier

- vueIndentScriptAndStyle: false
- singleAttributePerLine: true
- singleQuote: true
- trailingComma: none
- semi: false
