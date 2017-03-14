<template lang="html">
  <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
    <app-header
      :title="pageTitle"
    />
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
  import Header from './Header';

  export default {
    mixins: [],
    props: {},
    components: {
      Chat,
      AppHeader: Header
    },
    computed: {
      messagesCount() {
        return this.messages.length;
      },

      pageTitle() {
        return `Chat with ${this.receiver} (${this.messagesCount})`;
      }
    },
    watch: {},
    methods: {
      addNewMessage(newMessage) {
        this.messages.push({
          sender: this.currentUser,
          content: newMessage
        });
      }
    },
    data() {
      return {
        currentUser: 'Stjepko',
        receiver: 'Kreso',
        messages: [{
          sender: 'Kreso',
          content: 'Hi'
        }, {
          sender: 'Stjepko',
          content: 'Hello'
        }, {
          sender: 'Kreso',
          content: 'What do you think about Vue.js?'
        }]
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>
