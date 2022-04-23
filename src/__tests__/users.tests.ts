import supertest from 'supertest';
import app from '../app';
import mockDatabase from '../shared/utils/test/mockDb';
import { mockGetUsers } from '../shared/utils/test/mockTests';

const db = mockDatabase();

describe('authUser', () => {
  beforeAll (async () => {
    (await db).connect();
  });

  afterAll (async () => {
    (await db).closeDatabase();
  });

  it ('should register user', async () => {
    const { body } = await supertest(app)
      .post('/auth/local/register')
      .send({
        email: 'kz@mz.com',
        username: 'karol.zegarra',
        password: '12345678'
      })
      .expect(201);
    expect(body).toEqual({ token: expect.any(String) })
  });

  it ('should login user', async () => {
    const { body } = await supertest(app)
      .post('/auth/local/login')
      .send({
        email: 'kz@mz.com',
        password: '12345678'
      })
      .expect(200);
    expect(body).toEqual({ token: expect.any(String) });
  });

  it ('should get all users', async () => {
    const { body } = await supertest(app)
      .get('/api/users')
      .set('Authorization', expect.any(String))
      .expect(200);
    expect(body).toEqual(mockGetUsers);
  });
});