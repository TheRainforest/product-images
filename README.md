# Rainforest: Product Images Service

The product images module of Rainforest is responsible for dynamically rendering all images related to a product. It also allows the user to zoom into the image for more detailed viewing.

![Product Images Demo](demo/demo.gif)

## Related Projects

This proxy brings together the following modules:
  - Product Images Module: https://github.com/AmazonRainforest/product-images
  - Details Module: https://github.com/AmazonRainforest/details
  - Related Products Module: https://github.com/AmazonRainforest/related-products
  - Reviews Module: https://github.com/AmazonRainforest/reviews

## Technologies Used

  - Frontend: React, HTML5, CSS3, jQuery
  - Backend: Node.js, Express, PostgreSQL, Nginx
  - Deployment: AWS (EC2)

## CRUD API

| HTTP Verb |           Endpoint          |            Action             |
|-----------| --------------------------- | ----------------------------- |
| **POST**  |         /items/             |       CREATE new item         |
| **GET**   |       /items/:id            |       READ item by ID         |
| **PUT**   |       /items/:id            |  UPDATE an item's image by ID |
| **DELETE**|       /items/:id            |      DELETE item by ID        |

## Usage

**Install dependencies**
> npm install

**Set up environment variables**
- Make a copy of .env_sample and configure the environment variables as necessary.
- Save as .env and ensure it is added to .gitignore.

**Generate a CSV file containing a catalogue of 10 million products**
> npm run csv

**Connect to the database and load the schema**
> npm run load-pg

**Seed the database (using the CSV file generated above)**
> npm run seed-pg

**Build webpack bundle**
> npm run build

**Start up the server**
> npm start

## Style Guide
This module follows [Airbnb style guide](https://github.com/airbnb/javascript)