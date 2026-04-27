import request from 'supertest';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello, World!' });
});

describe('GET /', () => {
  test('returns Hello World message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, World!' });
  });
});