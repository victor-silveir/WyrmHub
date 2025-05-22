## Descrição do projeto:

Interface da aplicação WyrmHub, uma aplicação para realizar cadastro, deleção e atualização de dragões utilizando autenticação simples de usuário. O design desse projeto foi desenvolvido por mim e tem o intuito de servir como teste para a empresa DB.

# Sumário

<!--ts-->

- [Descrição do Projeto](#descrição-do-projeto)
- [Sumário](#sumário)
- [Tecnologias utilizadas](#Tecnologias-utilizadas)
- [Como instalar e rodar o projeto](#Como-instalar-e-rodar-o-projeto)
  - [Pré Requisitos](#pré-requisitos)
  - [Build do Projeto](#build-do-projeto)
- [Uso e Endpoints Liberados](#uso-e-endpoints-liberados)
- [Considerações Finais](#considerações-finais)
<!--te-->

## Estrutura do projeto

```
.
├── src/
|   ├── components/
|   |   ├── Alert.tsx
|   |   ├── Button.tsx
|   |   ├── Card.tsx
|   |   ├── Header.tsx
|   |   ├── InfinityScroll.tsx
|   |   ├── Input.tsx
|   |   ├── PageTemplate.tsx
|   |   ├── Spinner.tsx
|   |
|   ├── contexts/
|   |   ├── AuthContext.tsx
|   |
|   |
|   ├── hooks/
|   |   ├── useFetchDragons.ts
|   |   ├── useMutations.ts
|   |
|   ├── models/
|   |   └── ...
|   |
|   ├── pages/
|   |   ├── Dragons
|   |   |    ├── DragonsDetailsPage
|   |   |    |   ├── DragonsDetailsPage.tsx
|   |   |    |
|   |   |    ├── DragonsFormPage
|   |   |    |   ├── DragonsFormPage.tsx
|   |   |    |
|   |   |    ├── DragonsPage.tsx
|   |   |
|   |   ├── Login.tsx
|   |
|   ├── routes/
|   |    └── ...
|   |
|   ├── styles/
|   |    └── ...
└── ...
```

## Tecnologias utilizadas:

- React.Js

- TypeScript

- React

- Axios

- React-Query

- Styled Components

- Husky

- Eslint

- Prettier

- Commitzen

- Commitlint

Esse projeto foi criado utilizando Husky, commitlint e commitzen para controlar as mensagens de commits, padronizando com o padrão "conventional commits", foram colocados diversos scripts no package.json para incentivar o colaborador que utilizar o projeto para seguir as normas dos conventionals commits, assim como será barrado commits que não sigam esse padrão. Além disso, foi utilizado prettier e eslint para estipular normas de código e formatação do projeto.

Foi utilizado react como biblioteca padrão e react-query em conjunto com axios para a busca de dados na api.

# Como instalar e rodar o projeto:

## Pré Requisitos:

Para poder rodar o projeto na sua máquina é necessário ter instalado [NodeJs](https://nodejs.org/en/).

## Rodando localmente:

Após baixar o projeto, abra o terminal de comando na raíz do projeto e execute o seguinte comando:

```sh
yarn install
```

Este comando irá instalar os módulos para que o node possa rodar o projeto. Após isso execute o seguinte comando:

```sh
yarn install
```

Após subir a aplicação, acesse http://localhost:3000 para poder utilizá-la.

# Login

Para utilizar a aplicação é necessário ser utilizar um login de acesso, para isso foi feito de forma simples com um usuário pré-cadastrado:

- (username: smaug, password: targaryen123).

# Considerações Finais

- Como próximos passos sugeriria a permissão de criação de novos usuários, utilizando alguma forma de backend para salvar esses dados, utilização de storybook para todos os componentes e criação de testes unitários utilizando jest e react-testing-library, além de melhorias de design e usabilidade.
- Foi utilizado uma abordagem de design diferente para a listagem dos dragões, optei pela criação de cards, sendo que a busca dos dados desses cards é feita por meio de um scroll infinito, pela utilização do react-query, volume de dados só é possível notar no mobile e mesmo assim a busca acontece de forma muito rápida, sendo difícil a percepção. Essa escolha foi feita pensando em escalar o projeto para um volume grande de dados.
