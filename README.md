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

## CRUD Operations

| HTTP Verb |           Endpoint          |            Action             |
|-----------| --------------------------- | ----------------------------- |
| **POST**  |         /items/             |   CREATE a new item into DB   |
| **GET**   |       /items/:id            |   READ item based on ID       |
| **PUT**   |       /items/:id            |   UPDATE one image path       |
| **DELETE**|       /items/:id            |   DELETE item based on ID     |
