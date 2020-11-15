<template>
  <div>
    <b-message v-if="isReachable" type="is-info" size="is-large">
      <h1 class="is-size-3"><strong>{{node}}</strong> is being rebooted!</h1>
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
import BaseButton from "@/components/base-button";
export default {
name: "nodes-reboot-message",
  components: {BaseButton},
  created() {
    this.node = this.nodeToReboot
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
      this.$emit("rebootClosed", "RebootClosed");
    }
  },
  props: {
    nodeToReboot: String
  }
}
</script>

<style scoped>

</style>
