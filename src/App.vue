<template>
  <div id="app">
    <app-navbar></app-navbar>
    <quotes-page></quotes-page>
  </div>
</template>

<script>
import AppNavbar from './components/Navbar';
import QuotesPage from './components/QuotesPage';

export default {
  components: {
    AppNavbar,
    QuotesPage,
  },
};
</script>
