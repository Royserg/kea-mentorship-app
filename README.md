# Playground

Hey, welcome to your GitHub playground. You will find here all the requirements for the project and from time to time you will be required to also add soemthing to this README

### App requirements

  - app data should be stored in a database (myysql, mongodb, firebase ... anything you want)
  - your app data should be served via an API layer (path should start with api/..)
  - app should use nodejs (either use nodejs/npm to build/deploy your project or to act as an API layer )
  - you should upload both FE and BE code to this repo (how you decide to structure the folder is up to you)
  - you should provide documentation (short but some) on how I can run the app on my local environment
  - FE can be written in anything you want ( either you pick a framework or write it in vanilla javascript/typescript)
  - all code changes are submitted through feature branches that go through review (do not commit to master!)

### Nice to haves
  - app is built using a bundler (see webpack for example, if you feel it's too much then leave it out)
  - app can be built using the cli is using a frontend framework

### Building the app

#### NodeJS app providing API connected to Sqlite3 database containing table with random words providing CRUD operations.

- install dependencies

  ```
  npm install
  ```
- run app

  ```
  npm start
  ```
  or development mode for autorefresh
  ```
  npm run dev
  ```
- run queries targetting
  `localhost:3000/api/words`

  VS Code pluging: [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
  let's you run queries found in `./queries` directory in the editor

### Challanges
    1. Write a simple API that connects to a database of your choice (with only one column in one table as a database) and provide documentation on how to run locally
