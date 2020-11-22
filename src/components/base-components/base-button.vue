<template>
  <b-button
      @click="clicked"
      :type="type"
      :icon-left="icon"
      :size="size"
      :class=fullwidth outlined>
    {{ label }}
  </b-button>
</template>

<script>
/*
 * This component represents a basic button, complete with a prop-given type, label, icon and size. All base-buttons are fullwidth.
 */
export default {
name: "base-button",
  props: {
    label: String,
    //Has to be material design icon.
    icon: String,
    size: String,
    type: String,
    fullwidth: String
  },
  methods: {
    clicked() {
      // Fire when the base-button is clicked.
      // @args The payload is the label of the button, for identification purposes.
      this.$emit("base-button-clicked", this.label)
    }
  }
}
</script>

<style scoped>

</style>
