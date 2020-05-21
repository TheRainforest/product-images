# project-overnight/po-reviews

> This is the reviews module of Project Overnight.

## Related Projects

  - https://github.com/AmazonRainforest/details
  - https://github.com/AmazonRainforest/related-products
  - https://github.com/AmazonRainforest/reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## CRUD API

| HTTP Verb |           Endpoint          |            Action             |
|-----------| --------------------------- | ----------------------------- |
| **POST**  |         /items/             |       CREATE new item         |
| **GET**   |       /items/:id            |       READ item by ID         |
| **PUT**   |       /items/:id            |  UPDATE an item's image by ID |
| **DELETE**|       /items/:id            |      DELETE item by ID        |
