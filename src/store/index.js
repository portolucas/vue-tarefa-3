import Vue from "vue";
import Vuex from "vuex";

import { DISPATCH_PROD } from "./actions.type";
import { ADD_PROD } from "./mutations.type";


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    list: [],
  },
  mutations: {
    [ADD_PROD](state, prod) {
      state.list = state.list.concat(prod);
    },
  },
  actions: {
    [DISPATCH_PROD](context, prod) {
      context.commit(ADD_PROD, prod);
    },
  },
});
