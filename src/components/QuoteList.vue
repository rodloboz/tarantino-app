<template>
  <div id="quotes">
    <no-results v-if="quotes.length < 1"></no-results>
    <quote
      v-for="quote in quotes"
      :quote="quote"
      @removeClicked="deleteQuote"
      :key="quote.id"
    >
    </quote>
  </div>
</template>

<script>
  import Quote from './Quote';
  import NoResults from './NoResults';

  export default {
    props: {
      quotes: {
        type: Array,
        required: true,
      },
    },
    methods: {
      deleteQuote(id) {
        const index = this.quotes.findIndex(quote => quote.id === id);

        this.quotes.splice(index, 1);
      },
    },
    // mounted() {
    //   console.log(this.quotes);
    // },
    components: {
      Quote,
      NoResults,
    },
  };
</script>

<style>
  #quotes {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, .12);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
  }
</style>
