<template lang="html">
  <header class="mdl-layout__header mdl-layout__header--scroll">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title"> {{title}} </span>
    </div>
  </header>
  </div>

</template>

<script>
export default {
  mixins: [],
  props: {
    title: {
      type: String,
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
