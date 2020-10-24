import qs from "qs";

import api from "../../api/imgur";
import router from "../../router";

const state = {
  token: window.localStorage.getItem("imgur_token"),
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};

const actions = {
  login: () => {
    api.login();
  },
  logout: ({ commit }) => {
    commit("setToken", null);

    window.localStorage.removeItem("imgur_token");
  },
  finalizeLogin: ({ commit }, token) => {
    const query = qs.parse(token.replace("#", ""));

    commit("setToken", query.access_token);

    // persist token
    window.localStorage.setItem("imgur_token", query.access_token);

    // redirect user
    router.push("/");
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
