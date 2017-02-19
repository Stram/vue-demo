<template lang="html">
  <div class="mdl-list">
    <div class="mdl-list__item mdl-list__item--three-line"
      v-for="message in messages"
    >
      <message-item :message="message">
    </div>
  </div>
</template>

<script>
import MessageItem from './MessageItem';

export default {
  mixins: [],
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  components: {
    MessageItem
  },
  computed: {},
  watch: {},
  methods: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>

</style>
