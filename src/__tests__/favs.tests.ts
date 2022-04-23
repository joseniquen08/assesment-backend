import supertest from 'supertest';
import app from '../app';
import { ListFavModel } from '../favorites/entity/favModels';
import { getFavoritesListByIdService } from '../favorites/services/favServices';
import { createToken } from '../shared/utils/createToken';
import mockDatabase from '../shared/utils/test/mockDb';
import { mockCreateFavsList, mockGetSingleFavsList } from '../shared/utils/test/mockTests';

const db = mockDatabase();
const ListFavModelMock = ListFavModel as jest.MockedClass<typeof ListFavModel>;

describe('favs', () => {
  beforeAll (async () => {
    (await db).connect();
  });

  afterAll (async () => {
    (await db).closeDatabase();
  });

  it ('should create favorites list', async () => {
    const { body } = await supertest(app)
      .post('/api/favs')
      .set('Authorization', `${createToken("62617d16890925e682675eb1")}`)
      .send({
        name: "prueba lista",
        favs: [
          {
            title: "primer fav",
            description: "descripcion 1",
            link: "www.link1.com"
          },
          {
            title: "segundo fav",
            description: "descripcion 2",
            link: "www.link2.com"
          }
        ]
      })
      .expect(201);
    expect(body).toEqual(mockCreateFavsList);
  });

  it ('should single favorites list', async () => {
    ListFavModelMock.findById = jest.fn().mockImplementation(() => Promise.resolve(mockGetSingleFavsList));
    const listFavId = "626394e48a075ec23f8e296e";
    const result: any = await getFavoritesListByIdService(listFavId);
    expect(result).toEqual(mockGetSingleFavsList);
  });
});