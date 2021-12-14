import supertest from 'supertest';
import { app, server } from './app';

afterAll(() => {
  server.close();
});

test('it returns the health check', async () => {
  await supertest(app)
    .get('/health')
    .expect(200)
    .then((response) => {
      expect(response.body.success).toBe(true);
    });
});
