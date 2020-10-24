/* eslint-disable no-unused-vars */
import api from "../../api/imgur";
import router from "../../router";

const state = {
  images: [],
  isUploading: false,
};

const getters = {
  allImages: (state) => state.images,
  getStatus: (state) => state.isUploading,
};

const actions = {
  fetchImages: async ({ rootState, commit }) => {
    const { token } = rootState.auth;

    const {
      data: { data: images },
    } = await api.fetchImages(token);

    commit("setImages", images);
  },
  uploadImages: async ({ rootState, commit }, images) => {
    const { token } = rootState.auth;
    commit("setUploading", true);
    await api.upload(token, images);

    commit("setUploading", false);
    // redirect to home
    router.push("/");
  },
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
  setUploading: (state, status) => {
    state.isUploading = status;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
