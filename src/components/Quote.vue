<template>
  <div class="quote" @mouseover="toggleDelete" @mouseout="toggleDelete">
    <div class="quote-checkbox">
      <el-checkbox v-model="checked"></el-checkbox>
    </div>
    <div class="quote-wrapper">
      <div class="quote-heading">{{ heading }}</div>
      <div class="quote-body">{{ quote.body }}</div>
      <div class="quote-delete"
        v-if="deleteIsVisible"
        @click="removeHandler"
        >
        <i class="el-icon-delete"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      deleteIsVisible: false,
      editingBody: false,
    };
  },
  props: ['quote'],
  computed: {
    heading: function () {
      return `${this.quote.character} in ${this.quote.movie}`
    },
  },
  methods: {
    removeHandler() {
      this.$emit('removeClicked', this.quote.id);
    },
    toggleDelete() {
      this.deleteIsVisible = !this.deleteIsVisible;
    },
  },
};
</script>

<style lang="scss">
.quote {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, .12);

  .quote-wrapper {
    margin-left: 15px;
    position: relative;
    flex-grow: 1;
  }

  .quote-heading {
    font-weight: bold;
  }

  .quote-body {
    margin-top: 15px;
    font-weight: lighter;
  }

  .quote-delete {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
}

</style>
