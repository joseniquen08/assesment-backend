# Assessment Backend

The objective of this assessment is to put into practice what you have learned in the program.\
The topics that will be covered are:
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongodb](https://www.mongodb.com/)
- [Testing](https://jestjs.io/)

You need **knowledge** of the topics mentioned above.

## **Installation**

```
npm install
```

## **Demo**

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
The main request url is [http://localhost:4000](http://localhost:4000)

### `npm test`

Runs the tests.


## **Endpoints**

|Route|Http Verb|Route Middleware|Description|
|---|---|---|---|
|/auth/local/register|POST|`authMiddleware()`|Register user by email/username/password|
|/auth/local/login|POST|`authMiddleware()`|Login user by email/password|
|/api/favs|GET|`isAthenticated()`|Get all list of favorites|
|/api/favs|POST|`isAthenticated()`|Creates a new list of favorites|
|/api/favs/:id|GET|`isAthenticated()`|Get a single list of favorites|
|/api/favs/:id|POST|`isAthenticated()`|Add new item to list of favorites|
|/api/favs/:id|DELETE|`isAthenticated()`|Deletes a list of favorites|
|/api/users|GET|`isAthenticated()`|Get all users|
|/api/users/:id|GET|`isAthenticated()`|Get a single user|

For **POST** requests, here some examples:

#### `/auth/local/register`

```
{
  "email": "kz@mz.com",
  "username": "karol.zegarra",
  "password": "12345678"
}
```

#### `/auth/local/login`

```
{
  "email": "kz@mz.com",
  "password": "12345678"
}
```

Auth routes have a **token** as a response.

#### `/api/favs`

```
{
  "name": "Prueba lista",
  "favs": [
    {
      "title": "Primer fav",
      "description": "Descripcion 1",
      "link": "www.link1.com"
    },
    {
      "title": "Segundo fav",
      "description": "Descripcion 2",
      "link": "www.link2.com"
    }
  ]
}
```

#### `/api/favs/:id`

```
{
  "title": "Tercer fav",
  "description": "Descripcion 3",
  "link": "www.link3.com"
}
```