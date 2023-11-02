# template project

Esse projeto tem como objetivo definir o padrão de projetos front-end Vuejs simulando um fluxo de pagamento onde o usuário escolhe entre duas modalidades de assinatura e é redirecionado para uma página de pagamento onde são listados os respectivos planos para essas modalidades, também é possível aplicar um cupom e preencher as informações de método de pagamento e redirecionar para uma tela de pagamento realizado.

O projeto irá utilizar **JSON Server** para simular endpoints

# Definições
- Options Api
- Cypress
- Estrutura de Pastas

## Estrutura de Pastas
src/
├── assets/ 
│   ├── imgs/
│   └── styles/
├── building-blocks/ (?)
│   ├── api/
│   │   ├── core.js 
│   │   ├── payment.js 
│   │   └── portal.js 
│   ├── directives/ 
│   └── middlewares/ 
├── application/ 
│   └── stores/ (?)
├── domain/ 
│   ├── enums/ 
│   ├── models/ 
│   │   └── entities/ (?)
│   │   └── factories/ (?)
├── presentation/ 
│   ├── components/ 
|   │   ├── atoms/ 
│   │   │   └── inputs/
│   │   │   └── buttons/
│   │   │   └── icons/
|   │   ├── molecules/ 
│   │   │   └── forms/
|   │   ├── organisms/
|   │   ├── pages/
|   │   └── templates/
|   │       ├── contexts/
|   │       └── layouts/
|   ├── i18n/ 
|   └── router/ 
└── service/ 
    ├── payment.js 
    ├── voucher.js 
    └── nutritionist.js 

# A Definir
- ESLint + Prettier
- JSDocs vs Typescript
- Event Emitter

# TODO
- Microfrontends