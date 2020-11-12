<template>
  <b-message title="Add new Node" type="is-info" size="is-large">
    <b-field label="Choose One">
      <b-select placeholder="Address type" @input="toggleAddressType" required>
        <option value="node-name">Node Name</option>
        <option value="node-ip">Node IP Address</option>
      </b-select>
    </b-field>
    <b-field>
      <b-input placeholder="Node Name"></b-input>
    </b-field>
    <br/>
    <b-field label="Name">
      <b-input placeholder="Node IP address"></b-input>
    </b-field>
  </b-message>
</template>

<script>
export default {
name: "nodes-addnewnode-message",
  data() {
    return {
      addressType: false
    }
  },
  methods: {
      toggleAddressType() {
        this.addressType = !(this.addressType)
      }
  }
}
</script>

<style scoped>

</style>
