# Mentorship App
School mentorship programme where I learned: \
- basics of building full-stack web applications,
- creating backend and connecting it to MongoDB,
- registration and login functionality,
- protected routes accessible to logged in users,

#### Technologies used:
 - NodeJS (Express)
 - ReactJS
 - MongoDB
 - JWT authentication

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
