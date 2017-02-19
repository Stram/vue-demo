<template lang="html">
  <section class="section--center mdl-grid">
    <div class="mdl-card mdl-cell mdl-cell--10-col mdl-cell--1-offset mdl-shadow--2dp">
      <message-list :messages="messages"/>
      <new-message-form @message:new="addNewMessage">
    </div>
  </section>
</template>

<script>
import MessageList from './MessageList';
import NewMessageForm from './NewMessageForm';

export default {
  mixins: [],
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  components: {
    MessageList,
    NewMessageForm
  },
  computed: {},
  watch: {},
  methods: {
    addNewMessage(message) {
      this.$emit('message:new', message);
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>

</style>
