import supertest from 'supertest';
import { app, server } from './app';

afterAll(() => {
  server.close();
});

test('it returns the health check', async () => {
  const response = await supertest(app).get('/health');

  expect(response.status).toEqual(200);
  expect(response.body.success).toEqual(true);
});
