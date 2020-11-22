<template>
  <b-message title="Add New Node" size="is-large" @close="messageClosed">
      <div class="block">
          <b-radio v-model="radio"
                   native-value="Node Name"
                   @input="nameSelected">
              Node Name
          </b-radio>
          <br/>
          <b-radio v-model="radio"
                   native-value="IP Address"
                   @input="ipAddressSelected">
              IP Address
          </b-radio>
      </div>
    <b-field>
      <b-input size="is-medium" :placeholder="selectedVariant" maxlength="30" v-model="inputData"></b-input>
      <p class="control">
          <b-button size="is-medium" class="button" @click="submitData" is-primary>
              Submit
          </b-button>
      </p>
    </b-field>
  </b-message>
</template>

<script>
/*
 * [NOT IMPLEMENTED] A message which allows the user to input data for a new system node.
 */
export default {
name: "nodes-addnewnode-message",
  data() {
    return {
      radio: String,
      inputData: '',
      selectedVariant: ""
    }
  },
  methods: {
      submitData() {
          switch(this.radio) {
              case 'Node Name':
                  this.$emit("addNewNodeSubmittedName", this.inputData);
                  break;
              case 'IP Address':
                  this.$emit("addNewNodeSubmittedIP", this.inputData);
                  break;
          }
      },
      messageClosed() {
          //Fire when the message is closed.
          this.$emit("addNewClosed", "AddNewClosed");
      },
      ipAddressSelected() {
          this.selectedVariant = "Node IP Address";
      },
      nameSelected() {
          this.selectedVariant = "Node Name";
      }
  }
}
</script>

<style scoped>

</style>
