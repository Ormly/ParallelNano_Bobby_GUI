<template>
  <b-button
      @click="clicked"
      type="type"
      icon-left="icon"
      size="size"
      class="is-fullwidth">
    {{ label }}
  </b-button>
</template>

<script>
export default {
name: "base-button",
  props: {
    label: String,
    icon: String,
    size: String,
    type: String
  },
  methods: {
    clicked() {
      this.$emit("clicked")
    }
  }
}
</script>

<style scoped>

</style>
