## Project Description:

Interface for the WyrmHub application, an application for registering, deleting and updating dragons using simple user authentication. The design of this project was developed by me and is intended to serve as a test for the DB company.

# Summary

<!--ts-->

- [Project Description](#project-description)
- [Summary](#summary)
- [Technologies used](#Technologies-used)
- [How to install and run the project](#How-to-install-and-run-the-project)
- [Prerequisites](#prerequisites)
- [Project Build](#project-build)
- [Usage and Released Endpoints](#usage-and-released-endpoints)
- [Final Considerations](#final-considerations)
<!--te-->

## Project Structure

```
.
├── src/
| ├── components/
| | ├── Alert.tsx
| | ├── Button.tsx
| | ├── Card.tsx
| | ├── Header.tsx
| | ├── InfinityScroll.tsx
| | ├── Input.tsx
| | ├── PageTemplate.tsx
| | ├── Spinner.tsx
| |
| ├── contexts/
| | ├── AuthContext.tsx
| |
| |
| ├── hooks/
| | ├── useFetchDragons.ts
| | ├── useMutations.ts
| |
| ├── models/
| | └──...
| |
| ├── pages/
| | ├──Dragons
| | | ├── DragonsDetailsPage
| | | | ├── DragonsDetailsPage.tsx
| | | |
| | | ├── DragonsFormPage
| | | | ├── DragonsFormPage.tsx
| | | |
| | | ├── DragonsPage.tsx
| | |
| | ├── Login.tsx
| |
| ├── routes/
| | └──...
| |
| ├── styles/
| | └── ...
└── ...
```

## Technologies used:

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

This project was created using Husky, commitlint and commitzen to control commit messages, standardizing with the "conventional commits" pattern. Several scripts were placed in package.json to encourage collaborators who use the project to follow the rules of conventional commits, as well as blocking commits that do not follow this pattern. In addition, prettier and eslint were used to stipulate code and formatting standards for the project.

React was used as the standard library and react-query was used in conjunction with axios to search for data in the api.

# How to install and run the project:

## Prerequisites:

To be able to run the project on your machine, you need to have [NodeJs](https://nodejs.org/en/) installed.

If You want to check the demo version of the application just access [WyrmHub](https://wyrm-hub.vercel.app/)!

## Running locally:

After downloading the project, open the command terminal at the root of the project and run the following command:

```sh
yarn install
```

This command will install the modules so that node can run the project. After that, run the following command:

```sh
yarn install
```

After uploading the application, access http://localhost:3000 to be able to use it.

# Login

To use the application, you need to use a login, for this we did it simply with a pre-registered user:

- (username: smaug, password: targaryen123).

# Final Considerations

- As next steps, I would suggest allowing the creation of new users, using some form of backend to save this data, using a storybook for all components and creating unit tests using jest and react-testing-library, in addition to design and usability improvements.
- A different design approach was used for the dragons list. I chose to create cards, and the data search for these cards is done through an infinite scroll, using react-query. The volume of data is only noticeable on mobile and even then the search happens very quickly, making it difficult to perceive. This choice was made with the idea of ​​scaling the project to a large volume of data in mind.
