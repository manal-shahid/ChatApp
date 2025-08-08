import request from 'supertest';
import app from '../server.js';

describe('Health Check', () => {
  it('should return 200 from /ping', async () => {
    const res = await request(app).get('/ping');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('pong');
  });
});