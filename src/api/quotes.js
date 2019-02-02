import Vue from 'vue';

export default {
  getQuotes() {
    return Vue.http.get('quotes')
      .then(response => Promise.resolve(response.body))
      .catch(error => Promise.reject(error));
  },
  getQuote(id) {
    return Vue.http.get(`quotes/${id}`)
      .then(response => Promise.resolve(response.body))
      .catch(error => Promise.reject(error));
  },
  createQuote(quote) {
    return Vue.http.post('quotes', quote)
      .then(response => Promise.resolve(response.body))
      .catch(error => Promise.reject(error));
  },
  deleteQuote(id) {
    return Vue.http.delete(`quotes/${id}`)
      .then(response => Promise.resolve(response.body))
      .catch(error => Promise.reject(error));
  },
};
