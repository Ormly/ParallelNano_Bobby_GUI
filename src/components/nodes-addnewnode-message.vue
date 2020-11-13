<template>
  <b-message title="Add new Node" size="is-large" @close="messageClosed">
      <div class="block">
          <b-radio v-model="radio"
                   native-value="Node Name">
              Node Name
          </b-radio>
          <b-radio v-model="radio"
                   native-value="IP Address">
              IP Address
          </b-radio>
      </div>
    <br/>
    <b-field>
      <b-input size="is-medium" placeholder="Node Name" v-model="inputData"></b-input>
      <p class="control">
          <b-button size="is-medium" class="button" @click="submitData" is-primary>
              Submit
          </b-button>
      </p>
    </b-field>
  </b-message>
</template>

<script>
export default {
name: "nodes-addnewnode-message",
  data() {
    return {
      radio: String,
      inputData: ''
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
          this.$emit("addNewClosed", "AddNewClosed");
      }
  }
}
</script>

<style scoped>

</style>
