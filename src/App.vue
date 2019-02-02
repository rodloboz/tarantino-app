<template>
  <div id="app">
    <app-navbar></app-navbar>
    <page-container></page-container>
  </div>
</template>

<script>
import AppNavbar from './components/Navbar';
import PageContainer from './components/Page';

export default {
  components: {
    AppNavbar,
    PageContainer,
  },
};
</script>
