<template>
  <b-button
      @click="clicked"
      type="type"
      icon-left="icon"
      size="size"
      :class=fullwidth>
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
    type: String,
    fullwidth: String
  },
  methods: {
    clicked() {
      this.$emit("base-button-clicked", this.label)
    }
  }
}
</script>

<style scoped>

</style>
