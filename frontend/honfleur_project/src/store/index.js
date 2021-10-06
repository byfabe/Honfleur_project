import { createStore } from 'vuex'

export default createStore({
  state: {
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
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
