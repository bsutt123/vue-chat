const storeObject = {
  modules: {
    messages: {
      namespaced: true,
      state: {
        messages: [
          {
            name: 'Message 1'
          },
          {
            name: 'Message 2'
          },
          {
            name: 'Message 3'
          },
        ],
      },
      getters: {
        activeRoom() {
          return {
            name: 'Room 1'
          };
        },
      },
      actions: {
        getMessages: jest.fn(),
        createMessage: jest.fn(),
      },
    },
    rooms: {
      namespaced: true,
      state: {
        rooms:[
          {
            name: "Room 1",
          },
          {
            name: "Room 2",
          },
          {
            name: "Room 3",
          }
        ]
      },
      actions: {
        getRooms: jest.fn(),
        setActiveRoom: jest.fn(),
      },
    },
    auth: {
      namespaced: true,
      state: {
        user: 'Brady',
        uid: 'bsutt123@gmail.com',
        accessToken: 'token',
        client: 'client',
      },
      actions: {
        createUser: jest.fn(),
        setUser: jest.fn(),
      },
      getters: {
        user: state => state.user,
        uid: state => state.uid,
        accessToken: state => state.accessToken,
        client: state => state.client,
      },
    },
  },
};

export default storeObject;