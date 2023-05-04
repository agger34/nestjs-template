<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# via docker-compose
$ docker-compose up -d
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Folder Structure

```bash
# 1. Overview
├───src
│   ├───database     # Database provider files, ex: mongodb, mysql
│   ├───decorator    # Decorator files, ex: @Roles
│   ├───guard        # Guard files, ex: JwtAuthGuard
│   ├───middleware   # Middleware files, ex: Logger
│   ├───module       # Source files, internal and external modules
│   │   ├───auth
│   │   ├───todo     # A sample todo modules include
│   │   └───user
│   ├───script       # Script files to run other process built with NestJs also
│   └───shared       # Enum, Constant, Helper.. to share across the system
└───test

# 2. Sample module details
.      
├───module
│   ├───todo
│   │       todo.controller.ts
│   │       todo.dto.ts
│   │       todo.enum.ts
│   │       todo.interface.ts
│   │       todo.module.ts
│   │       todo.providers.ts
│   │       todo.repository.ts
│   │       todo.schema.ts
│   │       todo.service.ts

```

### DTO

- is Data Transfer Object is to define the shape of the data that is sent between the client and server.

- DTOs typically contain a subset of the properties of an entity or model, and are used for validation and data transformation. For example, when creating or updating a resource via an API, the client will send data in the form of a DTO, which is then validated and used to create or update the actual resource.
- By using DTOs, you can ensure that the data being sent between the client and server is properly validated and structured, reducing the risk of errors and security issues. Additionally, DTOs can be used to hide or modify certain properties of an entity that you do not want to expose to the client, such as passwords or sensitive information.

### Schema/Entity/Model

- represents a concept or object in your application's domain model. The Entity or Model typically maps to a table or collection in a database, and is used to interact with the database provider.

### Repository

- is a common design pattern used in web development to separate the concerns of data access and manipulation from the rest of the application logic.
- should only be responsible for the basic CRUD (Create, Read, Update, Delete) operations on the entity, not responsible for business logic of application like service layer.

- One of the main benefits of using a separate Repository file is that it can help to decouple the data access logic from the business logic of your application. This can make your code more modular and easier to test, since you can test the data access logic separately from the rest of your application.
- Another benefit of using a separate Repository file is that it can provide a level of abstraction between your application and the underlying database implementation. This can make it easier to switch to a different database implementation in the future(e.g. MongoDB instead of PostgreSQL), since you can simply update the Repository implementation to work with the new database.
- Finally, using a separate Repository file can help to make your code more readable and maintainable, since it provides a clear separation between the data access logic and the rest of your application code.

### Service

- is responsible for providing the business logic of the application. ex: validation, business rules, workflow..

- the service layer adds a layer of abstraction between the controller and the repository, providing a clear separation of concerns and helping to keep the codebase organized and maintainable.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
