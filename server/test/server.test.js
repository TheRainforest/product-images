/* eslint-disable linebreak-style */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const request = require('supertest');
const app = require('../index');

describe('Test api/items/:id endpoint', () => {
  test('It should respond with 200 with correct id', async (done) => {
    const response = await request(app).get('/api/items/1');
    expect(response.statusCode).toBe(200);
    done();
  });

  test('It should respond  with correct id',
    async (done) => {
      const response = await request(app).get('/api/items/2');
      expect(response.body.itemId).toBe(2);
      done();
    });

  test('It should  fail to respond  with correct main image',
    async (done) => {
      const mainImage = 'https://i.picsum.photos/id/99/200/200.jpg';
      const response = await request(app).get('/api/items/2');
      expect(response.body.mainImage).not.toBe(mainImage);
      done();
    });

  test('It should  respond  with correct main image',
    async (done) => {
      const mainImage = 'https://i.picsum.photos/id/99/200/200.jpg';
      const response = await request(app).get('/api/items/99');
      expect(response.body.mainImage).toBe(mainImage);
      done();
    });

  test('It should  contain correct array items',
    async (done) => {
      const mainImage = [
        'https://i.picsum.photos/id/492/200/200.jpg',
        'https://i.picsum.photos/id/493/200/200.jpg',
        'https://i.picsum.photos/id/494/200/200.jpg',
        'https://i.picsum.photos/id/495/200/200.jpg',

      ];
      const response = await request(app).get('/api/items/98');
      mainImage.forEach((image) => {
        expect(response.body.altImages).toContain(image);
      });
      done();
    });
});
