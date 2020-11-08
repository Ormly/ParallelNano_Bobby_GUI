<template>
  <b-button
      @click="clicked"
      icon-left="icon"
      size="size">
    {{ label }}
  </b-button>
</template>

<script>
export default {
name: "base-button",
  props: {
    label: String,
    icon: String,
    size: String
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
