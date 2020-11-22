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
/*
 * A message which informs the user about environmental threshold values being exceeded.
 */
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
      //Propagates panic signal.
      this.$emit("systemShutdown","SystemShutdown")
    },
    messageClosed() {
      //Fire when the message is closed.
      this.$emit("panicClosed", "PanicClosed");
    }
  }
}
</script>

<style scoped>

</style>
