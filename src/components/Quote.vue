<template>
  <div class="quote" @mouseover="toggleDelete" @mouseout="toggleDelete">
    <div class="quote-checkbox">
      <el-checkbox v-model="checked"></el-checkbox>
    </div>
    <div class="quote-wrapper"
      v-click-outside="updateBody"
      @click="handleBodyClick"
    >
      <div class="quote-heading form-inline"
        v-if="isEditing"
      >
        <el-input placeholder="Please input" v-model="quote.character"></el-input>
        <el-input placeholder="Please input" v-model="quote.movie"></el-input>
      </div>
      <div class="quote-heading"
        v-if="!isEditing"
      >
        {{ quote.character }}
        in
        {{ quote.movie }}
      </div>
      <div class="quote-body"
        v-if="isEditing"
        @keyup.enter="updateBody"
        >
        <el-input placeholder="Please input" v-model="quote.body"></el-input>
      </div>
      <div class="quote-body"
        v-if="!isEditing"
      >{{ quote.body }}</div>
      <div class="quote-delete"
        v-if="showDelete"
        @click="removeHandler"
        >
        <i class="el-icon-delete"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ClickOutside from 'vue-click-outside'

export default {
  data() {
    return {
      checked: true,
      deleteIsVisible: false,
      isEditing: false,
    };
  },
  props: ['quote'],
  computed: {
    heading: function () {
      return `${this.quote.character} in ${this.quote.movie}`
    },
    showDelete: function () {
      return this.deleteIsVisible && !this.isEditing
    }
  },
  methods: {
    ...mapActions([
      'updateQuote',
    ]),
    removeHandler() {
      this.$emit('removeClicked', this.quote.id);
    },
    toggleDelete() {
      this.deleteIsVisible = !this.deleteIsVisible;
    },
    handleBodyClick() {
      this.isEditing = true;
    },
    updateBody(event) {
      event.preventDefault()
      this.updateQuote(this.quote);
      this.isEditing = false;
    }
  },
  directives: {
    ClickOutside
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

<style lang="scss" scoped>
.form-inline {
  display: flex;
  .el-input {
    margin-right: 15px;
  }
}

</style>
