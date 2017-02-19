<template lang="html">
  <span class="mdl-list__item-primary-content">
    <i class="material-icons mdl-list__item-icon">person</i>
    <span> {{message.sender}} </span>
    <span class="mdl-list__item-text-body">
      {{message.content}}
    </span>
  <span>
</template>

<script>
export default {
  mixins: [],
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  components: {},
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
