<template>
  <div>
    <b-message type="is-danger" size="is-medium">
      <h1 class="is-size-3">System Environment at dangerous levels, system will be shutdown automatically in 30 seconds!</h1>
    </b-message>
    <base-button
        type="is-primary"
        size="is-large"
        label="OK"
        @base-button-clicked="messageClosed">
    </base-button>
  </div>
</template>

<script>
import BaseButton from "@/components/base-components/base-button";
export default {
name: "data-warning-message",
  components: {BaseButton},
  props: {
    alert: Boolean
  },
  watch: {
    alert: function() {
      this.sendShutdownSignal();
    }
  },
  methods: {
    sendShutdownSignal() {
      this.$emit("systemShutdown","SystemShutdown")
    },
    messageClosed() {
      this.$emit("panicClosed", "PanicClosed");
    }
  }
}
</script>

<style scoped>

</style>
