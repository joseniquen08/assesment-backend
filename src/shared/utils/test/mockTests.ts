export const mockGetUsers = {
  users: [
    {
      _id: expect.any(String),
      email: "kz@mz.com",
      username: "karol.zegarra"
    }
  ]
}

export const mockCreateFavsList = {
  list: {
    _id: expect.any(String),
    user_id: expect.any(String),
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
  }
}

export const mockGetSingleFavsList = {
  listFavs: {
    _id: "626394e48a075ec23f8e296e",
    user_id: "62617d16890925e682675eb1",
    name: "prueba 2 lista",
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
  }
}
