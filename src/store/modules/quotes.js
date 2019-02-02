import Vue from 'vue';
import quotesApi from '../../api/quotes';

const READY = 'READY'
const LOADING = 'LOADING';
const LOAD_QUOTES = 'LOAD_QUOTES';
const CREATE_QUOTE = 'CREATE_QUOTE';
const UPDATE_QUOTE = 'UPDATE_QUOTE';

const state = {
  all: [],
  pending: false,
};

const getters = {
  quotes: state => state.all,
};

const actions = {
  getQuotes({ commit }) {
    return new Promise((resolve, reject) => {
      commit(LOADING);
      quotesApi.getQuotes()
        .then((response) => {
          console.log(response)
          commit(LOAD_QUOTES, response);
          commit(READY);
          resolve(response);
        }, (error) => {
          reject(error);
        });
    });
  },
  updateQuote({ commit }, quote) {
    return new Promise((resolve, reject) => {
      commit(UPDATE_QUOTE, quote);
      resolve(quote)
    });
  },
};

const mutations = {
  [LOADING](state) {
    state.pending = true;
  },
  [READY](state) {
    state.pending = false;
  },
  [LOAD_QUOTES](state, quotes) {
    state.all = quotes;
  },
  [CREATE_QUOTE](state, quote) {
    state.all.push(quote);
  },
  [UPDATE_QUOTE](state, payload) {
    const index = state.all.findIndex(quote => quote.id === payload.id);
    Vue.set(state.all, index, payload);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
