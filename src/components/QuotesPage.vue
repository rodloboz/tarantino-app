<template>
  <div class="page-wrapper">
    <quote-list :quotes="quotes"></quote-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import QuoteList from'./QuoteList';

export default {
  computed: {
    ...mapGetters([
      'quotes',
    ]),
  },
  mounted() {
    this.getQuotes();
  },
  methods: {
    ...mapActions([
      'getQuotes',
    ]),
  },
  components: {
    QuoteList,
  },
};
</script>


<style lang="scss">
  .page-wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 30px;
  }
</style>
