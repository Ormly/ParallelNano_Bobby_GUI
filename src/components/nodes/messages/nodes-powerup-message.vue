<template>
  <div>
    <b-message v-if="isReachable" type="is-info" size="is-large">
      <h1 class="is-size-3"><strong>{{node}}</strong> is being powered up!</h1>
      <br/>
      <base-button @base-button-clicked="messageClosed"
                   :key="buttonData.label"
                   :label="buttonData.label"
                   :size="buttonData.size"
                   :type="buttonData.type">
      </base-button>
    </b-message>
    <b-message v-if="!isReachable" type="is-danger" size="is-large">
        <h1 class="is-size-3"><strong>{{node}}</strong> cannot be reached!</h1>
        <br/>
        <base-button @base-button-clicked="messageClosed"
                     :key="buttonData.label"
                     :label="buttonData.label"
                     :size="buttonData.size"
                     :type="buttonData.type">
        </base-button>
    </b-message>
  </div>
</template>

<script>
import BaseButton from "@/components/base-components/base-button";
/*
 * A message which informs the user about a selected node being powered on.
 */
export default {
  name: "nodes-powerup-message",
  components: {BaseButton},
  created() {
    this.node = this.nodeToPowerUp
  },
  data() {
    return {
      buttonData: {'label':'Confirm', 'size':'is-large', 'type':'is-primary'},
      isReachable: true,
      node: String
    }
  },
  methods: {
    messageClosed() {
      //Fire when the message is closed.
      this.$emit("powerUpClosed", "PowerUpClosed");
    }
  },
  props: {
    nodeToPowerUp: String
  }
}
</script>

<style scoped>

</style>
