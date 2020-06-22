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


#### Technologies used:
 - NodeJS (Express)
 - ReactJS
 - MongoDB

### Building the app

- Install dependencies

  To install dependencies of all packages, from root directory run:
  ```
  npm install
  ```
- Run app

  To start application, run below command from root directory:
  ```
  npm start
  ```

- To login and see protected page, register a new account or use one of the accounts:
  - email: `test` password: `test`
  - email: `new` password: `new`

- Extras:
   - To run only frontend of application use:
    ```
    npm run client
    ```
    - Similarly, to run only server:
    ```
    npm run server
    ```
- `./queries` directory contain predifined queries to test api responses

  VS Code pluging: [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
  let's you run queries found in `./queries` directory in the editor

### Challenges
    1. Write a simple API that connects to a database of your choice (with only one column in one table as a database) and provide documentation on how to run locally
    2. Your task is to create a login page, provide a user the ability to login, trace user login (i want to know when the user logged in last) and give him access to a page that can only be acessed if logged in. Modify your current database to host users (can remove your current table and create a new user table that contains basic user information, you can populate the table manually with fake users). About the restricted page, on refresh I want to still have access to the page. Hint: Use a token that is generated upon login and that you store in the backend and frontend. Whenever a user requests a restricted page send that token to the backend (together with his email that you store in the frontend) and only allow him to see the page if the values match.
    3. Validate user input upon login (email and username or phone number, use regex). 
    4. Provide option to reset password (use any email client of your choosing to send an email to the user with a link back to your platform). The link has to be unique and can only by the user and only used once.
