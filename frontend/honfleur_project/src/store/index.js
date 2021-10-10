import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    images: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
    ]
  },
  getters: {
    getImages: (state) => state.images,
    getCount: (state) => state.count,
  },
  mutations: {
    ADD_COUNT(state, data) {
      state.count = data;
    },
  },
  actions: {
  },
  modules: {
  }
})
