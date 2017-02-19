<template lang="html">
  <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
    <header class="mdl-layout__header mdl-layout__header--scroll">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title"> Chat with Krešo </span>
      </div>
    </header>
    <main class="mdl-layout__content">
      <div class="page-content">
        <chat
          :messages="messages"
          @message:new="addNewMessage"
        />
      </div>
    </main>
  </div>

</template>

<script>
import Chat from './Chat';

export default {
  mixins: [],
  props: {},
  components: {
    Chat
  },
  computed: {},
  watch: {},
  methods: {
    addNewMessage(newMessage) {
      this.messages.push({
        sender: 'Stjepko',
        content: newMessage
      });
    }
  },
  data() {
    return {
      messages: [{
        sender: 'Kreso',
        content: 'Hi'
      }, {
        sender: 'Stjepko',
        content: 'Hello'
      }]
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
