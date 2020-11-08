<template>
  <div v-for="button in firstButtonRow" :key="button.label" class="px-1 py-1">
    <base-button
      label="button.label"
      icon="button.icon"
      size="button.size"
      type="button.type">
    </base-button>
  </div>
  <div v-for="button in secondButtonRow" :key="button.label" class="px-1 py-1">
    <base-button
        label="button.label"
        icon="button.icon"
        size="button.size"
        type="button.type">
    </base-button>
  </div>
</template>

<script>
import BaseButton from "@/components/base-button";
export default {
name: "button-container",
  components: {BaseButton},
  props: {
    buttonData: []
  },
  computed: {
    firstButtonRow() {
      return this.buttonData.slice(0,2)
    },
    secondButtonRow() {
      return this.buttonData.slice(3,5)
    }
  }
}
</script>

<style scoped>

</style>
