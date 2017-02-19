<template lang="html">
  <form action="#" @submit.prevent="submit" class="mdl-grid mdl-cell--12-col">
    <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--10-col mdl-cell--middle">
      <textarea class="mdl-textfield__input" type="text" rows= "3" id="new-message-form"
        v-model="newMessageContent">
      </textarea>
      <label class="mdl-textfield__label" for="new-message-form">Enter new message...</label>
    </div>

    <div class="mdl-cell mdl-cell--2-col mdl-cell--middle">
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" type="submit"> Send </button>
    </div>
  </form>

</template>

<script>
export default {
  mixins: [],
  props: {},
  components: {},
  computed: {},
  watch: {},
  methods: {
    submit() {
      this.$emit('message:new', this.newMessageContent);
      this.newMessageContent = '';
    }
  },
  data() {
    return {
      newMessageContent: ''
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
